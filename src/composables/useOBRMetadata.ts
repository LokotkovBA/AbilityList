import { ref, watch } from 'vue';
import { z } from 'zod';
import { OBR_METADATA_KEY } from '@/utils/consts';
import OBR from '@owlbear-rodeo/sdk';
import { useOBRMetadataQueue } from '@/stores/useOBRMetadataQueue';

export function useORBMetadata<T extends string>(
    id: string,
    initialValue: T,
    onSuccess?: (value: T) => void,
) {
    const metadataQueue = useOBRMetadataQueue();
    const state = ref(initialValue);
    OBR.onReady(init);

    async function init() {
        const playerId = await OBR.player.getId();
        id += playerId;

        set(() => metadataQueue.add(id, initialValue));
    }

    async function set(onError?: () => void) {
        const metadataOBR = await OBR.room.getMetadata();
        const metadata = metadataOBR[OBR_METADATA_KEY];

        const { success, data } = z
            .object({ [id]: z.string() })
            .safeParse(metadata);

        if (!success) {
            onError?.();
            return;
        }

        state.value = data[id];
        onSuccess?.(state.value);
    }

    watch(state, (value) => {
        metadataQueue.add(id, value);
    });

    return { state };
}
