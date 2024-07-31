const { MongoClient } = require('mongodb');

// Replace this with your MongoDB connection string
const uri = 'mongodb+srv://kavyanshy66:l7bueK7FXzIyWDxd@cluster0.qfcbjdh.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0';

// Create a new MongoClient
const client = new MongoClient(uri, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});

async function main() {
  try {
    // Connect to the MongoDB cluster
    await client.connect();
    console.log('Connected to MongoDB successfully!');

    // Get a reference to a database
    const db = client.db('Anime'); // Replace 'mydatabase' with your database name

    // Get a reference to a collection
    const collection = db.collection('Anime'); // Replace 'mycollection' with your collection name

    // Perform operations on the collection
    const documents = await collection.find({}).toArray();
    console.log('Documents:', documents);

  } catch (e) {
    console.error('Error connecting to MongoDB:', e);
  } finally {
    // Close the connection when you're done
    await client.close();
  }
}

main().catch(console.error);
