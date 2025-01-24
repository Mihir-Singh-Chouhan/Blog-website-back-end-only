const express = require("express");
const PORT = 7000;
const app = express();
const cors = require('cors')

app.use(express.json());

let Blogs = require("./routes/blog");
let category = require("./routes/category");
let comments = require("./routes/comment");
let tag = require("./routes/tag");
let upload = require("./routes/bulkUpload");


let { blogValidation } = require("./validations/blogValidation");
let { categoryValidation } = require("./validations/categoryValidation");
let { commentValidation } = require("./validations/commentValidation");
let { tagValidation } = require("./validations/tagValidation");

const swaggerUi = require("swagger-ui-express");
const swaggerDocument = require("./swagger-output.json");

app.use(cors({
  origin: "*",
}))

app.get("/", (req, res) => {
  res.send("This is Home page");
});

app.use("/api-docs", swaggerUi.serve, swaggerUi.setup(swaggerDocument));

app.use("/blog", blogValidation, Blogs);
app.use("/category", categoryValidation, category);
app.use("/comments", commentValidation, comments);
app.use("/tags", tagValidation, tag);
app.use("/file", upload);

app.listen(PORT, () => {
  console.log("server is running on port 7000");
});
