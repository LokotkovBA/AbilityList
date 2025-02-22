import { defineStore } from 'pinia';
import { ref } from 'vue';

export type Languages = 'ru' | 'en';

export const LangLabel: Record<Languages, string> = {
    en: 'English',
    ru: 'Русский',
};

export const AddLabel: Record<Languages, string> = {
    en: 'Add',
    ru: 'Добавить',
};

export const TagLabels: {
    concentration: Record<Languages, string>;
    ritual: Record<Languages, string>;
} = {
    concentration: {
        en: 'C',
        ru: 'К',
    },
    ritual: {
        en: 'R',
        ru: 'Р',
    },
};

export const useLangStore = defineStore('lang', () => {
    const lang = ref<Languages>('ru');

    function setLang(val: Languages) {
        lang.value = val;
    }

    return {
        lang,
        setLang,
    };
});
