// DELETE ONE/MANY
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
  name: String,
  animal: String,
  age: Number,
});

const ox = mongoose.model("ox", animalSchema);

// ox.deleteOne({ age: 10 }).then(console.log("deleted!"));
// ox.find({ age:10 })
//   .then((data) => {
//     console.log(data);
//   })
//   .finally(() => {
//     mongoose.connection.close();
//   })
//   .catch((err) => console.error(err));

ox.deleteMany({ animal: "ox" }).then(console.log("deleted!"));
ox.find({ animla:"ox" })
  .then((data) => {
    console.log(data);
  })
  .finally(() => {
    mongoose.connection.close();
  })
  .catch((err) => console.error(err));
