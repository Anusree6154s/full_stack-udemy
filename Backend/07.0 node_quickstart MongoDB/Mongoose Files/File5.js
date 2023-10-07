// FIND (BY QUERY)

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

ox.find({ animal: "fox" })
  .then((data) => {
    console.log(data);
    // data.forEach((item)=>console.log(item.name));        //filter by name
    // data.filter((item)=>console.log(item.name));     // filter by name
    // console.log(data.filter((item) =>item.name==="alu"));    //filter and print the array
  })
  .finally(() => {
    mongoose.connection.close();
  })
  .catch((err) => console.error(err));
