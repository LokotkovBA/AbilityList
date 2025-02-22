<script setup lang="ts">
import { reactive, ref, watch } from 'vue';
import ListItem from './ListItem.vue';
import { calculateActionHeight, type Spell } from '@/utils/helpers';
import OBR from '@owlbear-rodeo/sdk';
import { useORBMetadata } from '@/composables/useOBRMetadata';
import { spellSchema } from '@/utils/schemas';
import { z } from 'zod';
import { AddLabel, LangLabel, useLangStore } from '@/stores/lang';

const langStore = useLangStore();
const nextKey = ref(1);
const currentHeight = ref(4);

const actions = reactive<
    { inputValue: string; value: Spell | null; key: number }[]
>([{ inputValue: '', value: null, key: 0 }]);
const { state: actionsState } = useORBMetadata(
    'actions',
    JSON.stringify(actions),
    (actionsRaw) => {
        const { data, success, error } = z
            .array(
                z.object({
                    inputValue: z.string(),
                    value: spellSchema.nullable(),
                    key: z.number(),
                }),
            )
            .safeParse(JSON.parse(actionsRaw));

        if (!success) {
            console.error('Failed to parse spells', error);
            return;
        }

        nextKey.value = 0;
        actions.length = 0;

        for (const spell of data) {
            actions.push({
                inputValue: spell.inputValue,
                value: spell.value,
                key: nextKey.value,
            });
            nextKey.value++;
        }
    },
);

watch(actions, (list) => {
    if (list.length !== currentHeight.value) {
        currentHeight.value = list.length;
        OBR.action.setHeight(calculateActionHeight(currentHeight.value + 1));
    }

    actionsState.value = JSON.stringify(list);
});

function add() {
    actions.push({
        inputValue: '',
        value: null,
        key: nextKey.value,
    });
    nextKey.value++;
}
function remove(value: string) {
    const index = actions.findIndex((action) => action.inputValue === value);
    actions.splice(index, 1);
}
</script>

<template>
    <ListItem
        v-for="action in actions"
        v-model:spell="action.value"
        v-model:input="action.inputValue"
        :key="action.key"
        :currentHeight="currentHeight"
        @remove-field="remove"
    />
    <section class="flex justify-between">
        <button
            class="h-[30px] self-start rounded-xl bg-blue-700 px-2 text-white"
            @click="add"
        >
            {{ AddLabel[langStore.lang] }}
        </button>

        <button
            class="h-[30px] self-start rounded-xl bg-blue-700 px-2 text-white"
            @click="langStore.setLang(langStore.lang === 'ru' ? 'en' : 'ru')"
        >
            {{ LangLabel[langStore.lang] }}
        </button>
    </section>
</template>
