import client from "./client";

async function FetchNewsDetailEntry(detailId) {
    try {
         const entry = await client.getEntry(detailId);
         if (!entry) return null;
         return entry.fields;
    } catch(err) {
         console.log(err);
         return null;
    }
}

export default FetchNewsDetailEntry;
