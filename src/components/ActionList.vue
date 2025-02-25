<script setup lang="ts">
import { computed, reactive, ref, watch } from 'vue';
import ListItem from './ListItem.vue';
import { calculateActionHeight, type Spell } from '@/utils/helpers';
import OBR from '@owlbear-rodeo/sdk';
import { useORBMetadata } from '@/composables/useOBRMetadata';
import { spellSchema } from '@/utils/schemas';
import { z } from 'zod';
import { AddLabel, useLangStore } from '@/stores/lang';

const langStore = useLangStore();
const nextKey = ref(1);

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

        actions.length = 0;

        let maxKey = 0;
        for (const spell of data) {
            actions.push({
                inputValue: spell.inputValue,
                value: spell.value,
                key: spell.key,
            });

            maxKey = Math.max(maxKey, spell.key);
        }

        nextKey.value = maxKey + 1;
    },
);
watch(actions, (list) => {
    actionsState.value = JSON.stringify(list);
});

const currentHeight = computed(() => actions.length);
watch(currentHeight, (newHeight) => {
    OBR.action.setHeight(calculateActionHeight(newHeight + 1));
});

watch(
    () => langStore.lang,
    (lang, oldLang) => {
        for (const action of actions) {
            if (!action.value) continue;

            const newName = action.value.name[lang];
            const oldName = action.value.name[oldLang];

            if (!action.inputValue.includes(oldName)) continue;

            action.inputValue = action.inputValue.replace(oldName, newName);
        }
    },
);

function add() {
    actions.push({
        inputValue: '',
        value: null,
        key: nextKey.value,
    });
    nextKey.value++;
}
function remove(value: number) {
    const index = actions.findIndex((action) => action.key === value);
    actions.splice(index, 1);
}
</script>

<template>
    <ListItem
        v-for="action in actions"
        v-model:spell="action.value"
        v-model:input="action.inputValue"
        :id="action.key"
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
            Lang
        </button>
    </section>
</template>
