<script setup lang="ts">
import { SpellSchoolColor } from '@/utils/consts';
import type { Spell } from '@/utils/helpers';

defineProps<{
    data: Spell[];
}>();

const emits = defineEmits<{
    selectSpell: [spell: Spell];
}>();
</script>

<template>
    <article
        class="list absolute right-0 left-0 z-10 rounded-b-2xl bg-slate-900 px-3 text-white"
    >
        <ul
            class="scrollbar-sm flex max-h-40 flex-col gap-1 overflow-y-auto pb-3"
        >
            <li
                :class="SpellSchoolColor[spell.type.en] ?? ''"
                :key="spell.id"
                v-for="spell in data"
            >
                <button
                    @click="emits('selectSpell', spell)"
                    class="w-full text-start text-xl"
                >
                    {{ spell.name.ru }}
                </button>
            </li>
        </ul>
    </article>
</template>

<style scoped lang="scss">
.list {
    top: calc(100% + 4px);
}
</style>
