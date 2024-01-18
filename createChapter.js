const mongoose = require("mongoose");
const Chapter = require("./Chapter"); // Adjust the path as necessary

mongoose.connect("mongodb://127.0.0.1/my-story");

const newChapter = new Chapter({
  title: "Chapter Title",
  content: "Content of the chapter.",
});

newChapter
  .save()
  .then((doc) => {
    console.log("Document saved:", doc);
    mongoose.connection.close();
  })
  .catch((err) => {
    console.error("Error saving document:", err);
    mongoose.connection.close();
  });
