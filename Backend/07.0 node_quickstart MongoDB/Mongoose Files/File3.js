// INSERT ONE DOCUMENT + SPECIFIC COLLECTION NAME

//PeopleDB

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

const peopleSchema = new mongoose.Schema(
  {
    name: String,
    age: Number,
  },
  {
    collection: "PeopleCollection", //specific collection name
  }
);
const person = mongoose.model("person", peopleSchema);

const person1 = new person({
  name: "John",
  age: 35,
});

person1
  .save()
  .then(console.log("saved!"))
  .finally(() => {
    mongoose.connection.close();
  });
