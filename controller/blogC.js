const { PrismaClient } = require("@prisma/client");
const prisma = new PrismaClient();

// curd for Blog

async function getAllBlogs(req, res) {
  try {
    const allBlogs = await prisma?.Blog.findMany();

    if (!allBlogs) {
      res.status(404).json({ message: "Blogs not found!" });
    }
    res
      .status(200)
      .json({ data: allBlogs, message: "Blogs fetched successfully!" });
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: "Error while fetching blog list!" });
  }
}

async function createBlogs(req, res) {
  const { slug, title, body, categoryIDs, tagIDs } = req.body;
  try {
    const newBlog = await prisma.Blog.create({
      data: {
        slug,
        title,
        body,
        categoryIDs,
        tagIDs,
      },
    });
    res.status(201).json(newBlog);
  } catch (err) {
    console.log(err);
    res.status(500).json({ message: "Error creating blog" });
  }
}


const updateBlog = async (req, res) => {
  const id = req.params.id;
  const updateUser = await prisma.Blog.update({
    where: {
      id: id,
    },
    data: {
      ...req.body,
    },
  });

  res.status(200).send({
    message: "Blog updated successfully!",
    data: updateUser,
  });
};

const deleteBlogs = async (req, res) => {
  const id = req.params.id;
  await prisma.Blog.delete({
    where: { id },
  });
  res.send("delete blog");
};

module.exports = {
  getAllBlogs,
  createBlogs,
  updateBlog,
  deleteBlogs,
};
