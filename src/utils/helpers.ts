import type Spells from '@/assets/spells';
import {
    ACTION_VERTICAL_PADDING as MAIN_VERTICAL_PADDING,
    LIST_ITEM_HEIGHT,
    MAIN_GAP,
    ACTION_HEIGHT_MIN,
} from './consts';

type ArrayElement<T extends readonly unknown[]> = T extends readonly (infer U)[]
    ? U
    : never;

export type Spell = ArrayElement<typeof Spells>;

export function calculateActionHeight(count: number) {
    return Math.max(
        ACTION_HEIGHT_MIN,
        count * LIST_ITEM_HEIGHT +
            (count - 1) * MAIN_GAP +
            MAIN_VERTICAL_PADDING * 2,
    );
}
