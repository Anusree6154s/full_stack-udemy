// InsertMany


const { MongoClient } = require("mongodb");

// Replace the uri string with your connection string.
const uri =
  "mongodb+srv://anu6154s:anu6154s@cluster0.6rd8soa.mongodb.net/?retryWrites=true&w=majority";

const client = new MongoClient(uri);

async function run() {
  try {
    const database = client.db("sample_mflix");
    const movies = database.collection("movies");

    const docs = [
      {
        title: "Record of",
        plot: "No bytes, no problem. Just insert a document, in MongoDB",
      },
      {
        title: "Shriveled Datum",
        plot: "No bytes, no problem. Just insert a document, in MongoDB",
      },
      {
        title: "Datum",
        plot: "No bytes, no problem. Just insert a document, in MongoDB",
      },
    ];
    const result = await movies.insertMany(docs);

    console.log(`A document was inserted with the _id: ${result.insertedCount}`);
  } finally {
    // Ensures that the client will close when you finish/error
    await client.close();
  }
}
run().catch(console.dir);
