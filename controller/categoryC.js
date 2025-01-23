const { PrismaClient } = require("@prisma/client");
const prisma = new PrismaClient();

// curd for Category

async function allCategory(req, res) {
  try {
    const dataOfCategory = await prisma?.Category.findMany();

    if (!dataOfCategory) {
      res.status(404).json({ message: "Category not found!" });
    }
    res
      .status(200)
      .json({ data: dataOfCategory, message: "Category fetched successfully!" });
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: "Error while fetching Category list!" });
  }
}

async function createCategory(req, res) {
  const { name,blogIDs, blogs} = req.body;
  try {
    const newBlog = await prisma.Category.create({
      data: {
        name,
        blogIDs,
        blogs,
      },
    });
    res.status(201).json(newBlog);
  } catch (err) {
    console.log(err);
    res.status(500).json({ message: "Error creating Category" });
  }
}


const updateCategory = async (req, res) => {
  const id = req.params.id;
  const updateUser = await prisma.Category.update({
    where: {
      id: id,
    },
    data: {
      ...req.body,
    },
  });

  res.status(200).send({
    message: "Category updated successfully!",
    data: updateUser,
  });
};

const deleteCategory = async (req, res) => {
  const id = req.params.id;
  await prisma.Category.delete({
    where: { id },
  });
  res.send("delete Category");
};


module.exports = {
  allCategory,
  createCategory,
  updateCategory,
  deleteCategory,
};
