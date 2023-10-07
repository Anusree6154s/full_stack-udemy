// VALIDATION/REQUIRED VALUES

//animalsDB

const mongoose = require("mongoose");

mongoose
  .connect(
    "mongodb+srv://anu6154s:anu6154s@cluster0.6rd8soa.mongodb.net/?retryWrites=true&w=majority",
    { dbName: "animalsDB" }
  )
  .then(() => {
    console.log("Connection to the Atlas Cluster is successful!");
  })
  .catch((err) => console.error(err));

const animalSchema = new mongoose.Schema({
  name: {type: String, required:[true, "enter animal name"]}, //validation key/value
  animal: String,
  age: Number,
});
const ox = mongoose.model("ox", animalSchema);

ox.create({
  age: 35,
})
  .then(console.log("saved!"))
  .finally(() => {
    mongoose.connection.close();
  });