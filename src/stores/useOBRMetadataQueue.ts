import { OBR_METADATA_KEY } from '@/utils/consts';
import OBR from '@owlbear-rodeo/sdk';
import { defineStore } from 'pinia';
import { ref } from 'vue';

export const useOBRMetadataQueue = defineStore('obr-metadata-queue', () => {
    const queue = ref<{ id: string; value: string }[]>([]);

    const timeout = ref<ReturnType<typeof setTimeout>>();

    function add(id: string, value: string) {
        clearTimeout(timeout.value);

        queue.value.push({ id, value });

        timeout.value = setTimeout(update, 50);
    }

    async function update() {
        if (!queue.value.length) return;

        const newData: Record<string, string> = {};
        const metadataOBR = await OBR.room.getMetadata();
        const metadata = metadataOBR[OBR_METADATA_KEY] as
            | Record<string, string>
            | undefined;

        for (const { id, value } of queue.value) {
            if (metadata?.[id] === value) continue;

            newData[id] = value;
        }
        queue.value = [];

        if (!Object.keys(newData).length) return;

        if (!metadata) {
            await OBR.room.setMetadata({ [OBR_METADATA_KEY]: newData });
            return;
        }

        await OBR.room.setMetadata({
            [OBR_METADATA_KEY]: { ...metadata, ...newData },
        });
    }

    return { add };
});
