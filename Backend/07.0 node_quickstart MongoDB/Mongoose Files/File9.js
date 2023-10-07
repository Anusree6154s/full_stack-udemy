// RELATIONSHIPS BETWEEN MODELS

//fruitDB

const mongoose = require("mongoose");

mongoose
  .connect(
    "mongodb+srv://anu6154s:anu6154s@cluster0.6rd8soa.mongodb.net/?retryWrites=true&w=majority",
    { dbName: "fruitDB" }
  )
  .then(() => {
    console.log("Connection to the Atlas Cluster is successful!");
  })
  .catch((err) => {
    console.error(err);
  });

// create a fruit model
const fruitSchema = new mongoose.Schema({
  name: String,
  rating: Number,
  price: Number,
});
const fruit = mongoose.model("Fruit", fruitSchema);
const peach = new fruit({
  name: "peach",
  rating: 5,
  price: 4.65,
});
peach.save().then(() => {
  console.log("fruit saved successfully!");
});

// create a people model with fruit schema relationship
const peopleSchema = new mongoose.Schema({
  name: String,
  favFruit: fruitSchema,
});
const person = mongoose.model("person", peopleSchema);
person.updateOne({ name: "smart" }, { $set: {favFruit: peach} }).then(() => {
  console.log("person updated!");
});
