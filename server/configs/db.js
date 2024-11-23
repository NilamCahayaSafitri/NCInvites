import { MongoClient, ServerApiVersion } from "mongodb";

const {MONGODB_URI, MONGODB_DATABASE} = process.env;

const client = new MongoClient(MONGODB_URI, {
    serverApi: {
        version: ServerApiVersion.v1,
        strict: true,
        deprecationErrors: true,
    },
});

try {
    await client.connect();
    await client.db().command({ ping: 1 });
    console.log("MongoDB database succesfully connection");
} catch (err) {
    console.error(err);
}

export const db = client.db(MONGODB_DATABASE);