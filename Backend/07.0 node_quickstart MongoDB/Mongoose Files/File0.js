// DOCUMENTATION FOR ONE DOCUMENT AND ONE DATABASE

//localdb

const mongoose = require("mongoose");

mongoose
  .connect(
    "mongodb://127.0.0.1:27017/localdb"
  )
  .then(() => {
    console.log("Connection to the local database is successful!");
  })
  .catch((err) => {
    console.error(err);
  });

const schema1 = new mongoose.Schema({
  name: String, 
  rating: Number, 
  price: Number, 
});

const module1 = mongoose.model("Fruit", schema1);

const variable1 = new module1({
  name: "Apple", 
  rating: 5, 
  price: 4.65, 
});

variable1
  .save()
  .then(() => {
    console.log("variable1 saved successfully!");
  })
  .finally(() => {
    mongoose.connection.close();
  });

