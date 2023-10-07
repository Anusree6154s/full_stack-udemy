// INSERT ONE DOCUMENT + MONGOOSE NO SPECIFIC COLLECTION NAME
// mongoose will automatically create colectionname as plural of first model name

//peopleDB

const mongoose = require("mongoose");

mongoose
  .connect(
    "mongodb+srv://anu6154s:anu6154s@cluster0.6rd8soa.mongodb.net/?retryWrites=true&w=majority",
    { dbName: "PeopleDB" }
  )
  .then(() => {
    console.log("Connection to the Atlas Cluster is successful!");
  })
  .catch((err) => console.error(err));

const peopleSchema = new mongoose.Schema({
  name: String,
  age: Number,
});
const x = mongoose.model("person", peopleSchema); //collection name is plural of 'person' model

x.create({
  name: "John",
  age: 35,
})
  .then(console.log("saved!"))
  .finally(() => {
    mongoose.connection.close();
  });

// // ANOTHER METHOD FOR x.create()
// const person1 = new x({
//   name: "John",
//   age: 35,
// });
// person1
//   .save()
//   .then(console.log("saved!"))
//   .finally(() => {
//     mongoose.connection.close();
//   });
