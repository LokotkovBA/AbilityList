<script setup lang="ts">
import { reactive, watch } from 'vue';
import ListItem from './ListItem.vue';
import { calculateActionHeight, type Spell } from '@/utils/helpers';
import OBR from '@owlbear-rodeo/sdk';
import { useORBMetadata } from '@/composables/useOBRMetadata';
import { spellSchema } from '@/utils/schemas';
import { z } from 'zod';

const actions = reactive<{ id: number; value: Spell | null }[]>([]);
const { state: actionsState } = useORBMetadata('actions', '[]');

watch(actions, (list) => {
    OBR.action.setHeight(calculateActionHeight(list.length + 1));

    actionsState.value = JSON.stringify(list);
});
watch(
    actionsState,
    (actionsRaw) => {
        const { data, success, error } = z
            .array(z.object({ id: z.number(), value: spellSchema.nullable() }))
            .safeParse(JSON.parse(actionsRaw));

        if (!success) {
            console.error('Failed to parse spells', error);
            return;
        }

        actions.length = 0;

        for (const spell of data) {
            actions.push({ id: actions.length, value: spell.value });
        }
        console.log(actions);
    },
    { immediate: true },
);

function add() {
    actions.push({
        id: actions.length,
        value: null,
    });
}
function remove(id: number) {
    const index = actions.findIndex((action) => action.id === id);
    actions.splice(index, 1);
}
</script>

<template>
    <ListItem
        v-for="action in actions"
        v-model="action.value"
        :key="action.id"
        :id="action.id"
        @remove-field="remove"
    />
    <button
        class="h-[30px] self-start rounded-xl bg-blue-700 px-2 text-white"
        @click="add"
    >
        Add
    </button>
</template>
