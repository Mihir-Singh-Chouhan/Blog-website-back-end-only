const express = require("express");
const PORT = 7000;
const app = express();

app.use(express.json())

let Blogs = require("./routes/blog");
let category = require("./routes/category");
let comments = require("./routes/comment");
let tag = require("./routes/tag");

app.get("/", (req, res) => {
  res.send("This is Home page");
});

app.use("/blog", Blogs);
app.use("/category", category);
app.use("/comments", comments);
app.use("/tags", tag);

app.listen(PORT, () => {
  console.log("server is running on port 7000");
});
