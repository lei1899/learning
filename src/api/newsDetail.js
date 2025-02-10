import client from "./client";

async function FetchNewsDetailEntry(newsEntryID) {
    try {
         const entry = await client.getEntry(newsEntryID);
         if (!entry) return null;
         return entry.fields;
    } catch(err) {
         console.log(err);
         return null;
    }
}

export default FetchNewsDetailEntry;
