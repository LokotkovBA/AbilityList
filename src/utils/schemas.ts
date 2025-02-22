import { z } from 'zod';

export const spellSchema = z.object({
    id: z.string(),
    level: z.number(),
    name: z.object({
        ru: z.string(),
        en: z.string(),
    }),
    link: z.object({
        ru: z.string(),
        en: z.string(),
    }),
    type: z.object({
        ru: z.string(),
        en: z.string(),
    }),
    components: z.object({
        ru: z.string(),
        en: z.string(),
    }),
    concentration: z.boolean(),
    ritual: z.boolean(),
    range: z.object({
        ru: z.string(),
        en: z.string(),
    }),
    castTime: z.object({
        ru: z.string(),
        en: z.string(),
    }),
});
