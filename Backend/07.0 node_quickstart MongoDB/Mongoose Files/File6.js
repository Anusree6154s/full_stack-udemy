// UPDATE ONE/MANY
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

// ox.updateOne({ age: 15 }, { $set: { age: 10 } }).then(console.log("updated!"));
// ox.find({ age:10 })
//   .then((data) => {
//     console.log(data);
//   })
//   .finally(() => {
//     mongoose.connection.close();
//   })
//   .catch((err) => console.error(err));

  
ox.updateMany({ animal: "fox" }, { $set: { animal: "ox" } }).then(console.log("updated!"));
ox.find({ animal:"ox" })
  .then((data) => {
    console.log(data);
  })
  .finally(() => {
    mongoose.connection.close();
  })
  .catch((err) => console.error(err));
