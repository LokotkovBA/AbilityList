import { useORBMetadata } from '@/composables/useOBRMetadata';
import { defineStore } from 'pinia';

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
    const { state: lang } = useORBMetadata<Languages>('lang', 'ru');

    function setLang(val: Languages) {
        lang.value = val;
    }

    return {
        lang,
        setLang,
    };
});
