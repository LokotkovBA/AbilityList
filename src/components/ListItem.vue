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
import { calculateActionHeight, type Spell } from '@/utils/helpers';
import { TagLabels, useLangStore } from '@/stores/lang';
import { SPELL_NAME_DROPDOWN_DIFF, SpellSchoolColor } from '@/utils/consts';
import OBR from '@owlbear-rodeo/sdk';

const props = defineProps<{
    currentHeight: number;
}>();

const selectedSpell = defineModel<Spell | null>('spell');
const spellName = defineModel<string>('input', { default: '' });

const emits = defineEmits<{
    removeField: [inputValue: string];
}>();

const langStore = useLangStore();

const used = ref(false);
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
    spellName.value = spell.name[langStore.lang];
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
    () => langStore.lang,
    (lang, oldLang) => {
        const newName = selectedSpell.value?.name[lang] ?? '';
        const oldName = selectedSpell.value?.name[oldLang] ?? '';

        if (!newName || !oldName) return;

        spellName.value = spellName.value.replace(oldName, newName);
    },
);
watch(
    () => selecting.value && spellsToShow.value.length,
    async (showingDropdown) => {
        const height = calculateActionHeight(props.currentHeight + 1);

        if (showingDropdown) {
            OBR.action.setHeight(height + SPELL_NAME_DROPDOWN_DIFF);
            return;
        }

        OBR.action.setHeight(height);
    },
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
            'flex items-center gap-2 text-white': true,
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

        <section class="relative flex w-full gap-2 border-b-2">
            <input
                ref="inputRef"
                v-model="spellName"
                @focus="selecting = true"
                :class="{
                    'w-full text-xl focus:outline-none': true,
                    [SpellSchoolColor[selectedSpell?.type.en ?? '']]:
                        !!selectedSpell,
                }"
            />
            <span class="shrink-0 self-end" v-if="selectedSpell">
                {{ selectedSpell?.range[langStore.lang] }}
            </span>
            <span class="shrink-0 self-end" v-if="selectedSpell">
                {{ selectedSpell?.castTime[langStore.lang] }}
            </span>

            <DropdownList
                @mousedown.stop
                v-if="selecting && spellsToShow.length"
                @select-spell="selectSpell"
                :data="spellsToShow"
            />
        </section>

        <span v-if="selectedSpell?.ritual" class="rounded bg-violet-500 px-1">{{
            TagLabels.ritual[langStore.lang]
        }}</span>
        <span
            v-if="selectedSpell?.concentration"
            class="rounded bg-cyan-500 px-1"
            >{{ TagLabels.concentration[langStore.lang] }}</span
        >

        <a
            v-if="selectedSpell"
            target="_blank"
            :href="selectedSpell?.link.ru"
            class="size-5 shrink-0 rounded-full bg-blue-500"
        ></a>

        <button
            type="button"
            @click="emits('removeField', spellName)"
            class="size-5 shrink-0 rounded-full bg-red-500"
        ></button>
    </section>
</template>
