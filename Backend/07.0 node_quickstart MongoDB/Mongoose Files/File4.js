// iINSERT MANY DOCUMENTS

// animalsDB

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

ox.insertMany([
  {
    name: "alu",
    animal: "ox",
    age: 23,
  },
  {
    name: "emu",
    animal: "ox",
    age: 7,
  },
  {
    name: "bell",
    animal: "ox",
    age: 35,
  },
  {
    name: "hilo",
    animal: "ox",
    age: 2,
  },
  {
    name: "John",
    animal: "fox",
    age: 15,
  },
])
  .then(console.log("saved!"))
  .finally(() => {
    mongoose.connection.close();
  });

// // ANOTHER METHOD FOR ox.insertMany
// const ox1 = new ox({
//   name: "John",
//   animal: "fox",
//   age: 15,
// });
// const ox2 = new ox({
//     name: "emu",
//     animal: "ox",
//     age: 7,
// });
// const ox3 = new ox({
//     name: "bell",
//     animal: "ox",
//     age: 35,
// });
// const ox4 = new ox({
//     name: "hilo",
//     animal: "ox",
//     age: 2,
// });
// const ox5 = new ox({
//     name: "alu",
//     animal: "ox",
//     age: 23,
// });
// ox1.save();
// ox2.save();
// ox3.save();
// ox4.save();
// ox5.save();
