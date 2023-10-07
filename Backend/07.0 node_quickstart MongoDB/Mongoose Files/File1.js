// DOCUMENTATION FOR ONE DOCUMENT AND ONE DATABASE

//fruitDB

// Import the Mongoose library
const mongoose = require("mongoose");

// Connect to the MongoDB Atlas Cluster using the provided connection string
mongoose
  .connect(
    "mongodb+srv://anu6154s:anu6154s@cluster0.6rd8soa.mongodb.net/?retryWrites=true&w=majority",
    { dbName: "fruitDB" }
  )
  .then(() => {
    // Connection successful
    console.log("Connection to the Atlas Cluster is successful!");
  })
  .catch((err) => {
    // Handle any connection errors
    console.error(err);
  });

// Define a schema for the "Fruit" collection
const fruitSchema = new mongoose.Schema({
  name: String, // Name of the fruit
  rating: Number, // Rating of the fruit
  price: Number, // Price of the fruit
});

// Create a model for the "Fruit" collection based on the schema
const Fruit = mongoose.model("Fruit", fruitSchema);

// Create a new "Fruit" document
const fruit1 = new Fruit({
  name: "Apple", // Name of the fruit
  rating: 5, // Rating of the fruit
  price: 4.65, // Price of the fruit
});

// Save the newly created fruit document to the database
fruit1
  .save()
  .then(() => {
    console.log("Fruit saved successfully!");
  })
  .finally(() => {
    mongoose.connection.close();
  });
