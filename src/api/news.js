import client from "./client";

async function FetchNewsEntry(listId) {
    try {
        const entry = await client.getEntry(listId);
        if (!entry) return null;
        return entry.fields;
    } catch(err) {
        console.log(err);
        return null;
    }
}

export default FetchNewsEntry;