<script setup lang="ts">
import Spells from '@/assets/spells';
import {
    computed,
    onMounted,
    onUnmounted,
    ref,
    useTemplateRef,
    watch,
} from 'vue';
import DropdownList from './DropdownList.vue';
import type { Spell } from '@/utils/helpers';

defineProps<{
    id: number;
}>();

const selectedSpell = defineModel<Spell | null>();

const emits = defineEmits<{
    removeField: [id: number];
}>();

const used = ref(false);
const spellName = ref('');
const selecting = ref(false);
const input = useTemplateRef<HTMLInputElement>('inputRef');

const spellsToShow = computed(() => {
    if (spellName.value.length < 2) return [];

    const query = spellName.value.toLowerCase().split(' ');

    return Spells.filter(
        ({ name: { ru, en } }) =>
            query.filter(
                (word) =>
                    ru.toLowerCase().includes(word) ||
                    en.toLowerCase().includes(word),
            ).length,
    );
});

function selectSpell(spell: Spell) {
    selecting.value = false;
    spellName.value = spell.name.ru;
    selectedSpell.value = spell;
}

function stopSelecting(event: Event) {
    if (
        event.currentTarget instanceof HTMLInputElement &&
        event.currentTarget === input.value
    )
        return;

    selecting.value = false;
}

watch(
    selectedSpell,
    (spell) => {
        if (!spell) return;

        spellName.value = spell.name.ru;
    },
    { immediate: true },
);
onMounted(() => {
    document.addEventListener('mousedown', stopSelecting);
});
onUnmounted(() => {
    document.removeEventListener('mousedown', stopSelecting);
});
</script>

<template>
    <section
        :class="{
            'relative flex flex-row items-center gap-2 text-white': true,
            'line-through': used,
        }"
    >
        <button
            @click="used = !used"
            class="rounded-full bg-white p-0.5"
            type="button"
        >
            <div
                :class="{ 'size-4 rounded-full': true, 'bg-gray-900': used }"
            />
        </button>
        <input
            ref="inputRef"
            v-model="spellName"
            @focus="selecting = true"
            class="w-full border-b-2 text-xl focus:outline-none"
        />
        <span v-if="selectedSpell" class="shrink-0">
            {{ selectedSpell?.range.ru }}
        </span>
        <span v-if="selectedSpell" class="shrink-0">
            {{ selectedSpell?.castTime.ru }}
        </span>

        <a
            v-if="selectedSpell"
            target="_blank"
            :href="selectedSpell?.link.ru"
            class="size-5 shrink-0 rounded-full bg-blue-500"
        ></a>

        <button
            type="button"
            @click="emits('removeField', id)"
            class="size-5 shrink-0 rounded-full bg-red-500"
        ></button>

        <DropdownList
            @mousedown.stop
            v-if="selecting && spellsToShow.length"
            @select-spell="selectSpell"
            :data="spellsToShow"
        />
    </section>
</template>
