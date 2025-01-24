const { PrismaClient } = require("@prisma/client");
const prisma = new PrismaClient();
const csv = require("csv-parser");
const fs = require("fs");

async function bulkUploadBlogs(req, res) {
    const filePath = req.file.path;
    const blogs = [];
   
    fs.createReadStream(filePath)
      .pipe(csv())
      .on("data", (row) => {
        blogs.push(row);
      })
      .on("end", async () => {
        try {
          const createdBlogs = await prisma.Blog.createMany({
            data: blogs.map((blog) => ({
              slug: blog.slug,
              title: blog.title,
              body: blog.body,
              categoryIDs: blog.categoryIDs.split(","),
              tagIDs: blog.tagIDs.split(","),
              coverImage: blog.coverImage,
            })),
          });
          res.status(201).json(createdBlogs);
        } catch (err) {
          console.error("Error creating blogs:", err);
          res.status(500).json({ message: "Error creating blogs" });
        }
      });
  }
   
  module.exports = {
    bulkUploadBlogs,
  };