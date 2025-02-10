import client from "./client";

async function FetchNewsEntry() {
    try {
        const entry = await client.getEntry('50qHiMEtf8Zc8AwK1YvmNY');
        if (!entry) return null;
        return entry.fields;
    } catch(err) {
        console.log(err);
        return null;
    }
}

export default FetchNewsEntry;