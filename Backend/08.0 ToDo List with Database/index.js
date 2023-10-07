import express from "express";
import bodyParser from "body-parser";
import * as mongoose from "mongoose";
import _ from "lodash"; //to captalise first letter of route parameter

const app = express();
const port = 3000;

// mongoose
//   .connect("mongodb://127.0.0.1:27017/todoDB")
//   .then(console.log("connected locally!"));

  mongoose
  .connect("mongodb+srv://anu6154s:anu6154s@cluster0.6rd8soa.mongodb.net/?retryWrites=true&w=majority", { dbName: "todoDB" })
  .then(console.log("connected on atlas!")); 

app.use(express.static("public"));
app.use(bodyParser.urlencoded({ extended: true }));

const itemSchema = { name: String };
const listSchema = { name: String, list: [itemSchema] };
const item = mongoose.model("item", itemSchema);
const customList = mongoose.model("List", listSchema);

//WAS IN PLACE OF EMPTY ARRAY
// const item1 = new item({ name: "ben" });
// const item2 = new item({ name: "hona" });
// const item3 = new item({ name: "sel" });
// const defaultlist = [item1, item2, item3];

app.get("/", (req, res) => {
  item
    .find()
    .then((data) =>
      res.render("index.ejs", { tasks: data, title: "ToDo List" })
    );
});

app.get("/:customList", (req, res) => {
    const listName = _.capitalize([req.params.customList]); //using lodash
//   const listName = req.params.customList;
  customList.findOne({ name: listName }).then((data) => {
    if (!data) {
      customList.create({
        name: listName,
        list: [],
      });
      console.log("Custom list created.");
      res.redirect("/" + listName);
    } else {
      res.render("index.ejs", { tasks: data.list, title: listName });
    }
  });
});

app.post("/add", async (req, res) => {
  const task = req.body.task;
  const title = req.body.titleName;
  const newitem = new item({ name: task });

  if (title === "ToDo List") {
    await newitem.save();
    console.log("added!");
    res.redirect("/");
  } else {
    try {
      const data = await customList.findOne({ name: title });
      if (data) {
        data.list.push(newitem);
        await customList.findOneAndUpdate({ name: title }, { list: data.list });
        console.log("pushed!");
        res.redirect("/" + data.name);
      } else {
        console.log("Custom list not found.");
        res.status(404).send("Custom List Not Found");
      }
    } catch (err) {
      console.error(err);
      res.status(500).send("Internal Server Error");
    }
  }
});

app.post("/delete/:id", async (req, res) => {
  const id = req.params.id;
  const title = req.body.titleName;

  if (title === "ToDo List") {
    try {
      const data = await item.find();
      const itemItem = data[id];

      if (itemItem) {
        await item.deleteOne({ name: itemItem.name });
        res.redirect("/");
      } else {
        console.log("Item not found.");
        res.status(404).send("Item Not Found");
      }
    } catch (error) {
      console.error(err);
      res.status(500).send("Internal Server Error");
    }
  } else {
    try {
      const listItem = await customList.findOne({ name: title });
        const array = listItem.list;

      //    array.splice(id, 1);
      //   await customList.findOneAndUpdate({ name: title }, { list: array });

      //ANOTHER WAY
      const Id = array[id];
      await customList.findOneAndUpdate({ name: title }, {$pull: {list: {_id: Id} }});

      console.log("Item deleted!");
      res.redirect("/" + title);
    } catch (error) {
      console.error(error);
      res.status(500).send("Internal Server Error");
    }
  }
});

app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
