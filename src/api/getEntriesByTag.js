import client from "./client";

export const getEntriesByTag = async (tagId) => {
    try {
        const entries = await client.getEntries({
            'metadata.tags.sys.id[in]': tagId,
        });
        return entries.items;
    } catch (error) {
        console.error('Error fetching entries by tag:', error);
        throw error;
    }
};

export default getEntriesByTag;