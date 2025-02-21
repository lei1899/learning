import client from "./client";

async function FetchEntry(id) {
    try {
        const entry = await client.getEntry(id);
        if (!entry) return null;
        return entry.fields;
    } catch(err) {
        console.log(err);
        return null;
    }
}

export default FetchEntry;