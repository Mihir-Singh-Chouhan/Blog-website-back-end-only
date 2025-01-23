const { PrismaClient } = require("@prisma/client");
const prisma = new PrismaClient();

// curd for Comments

async function allComments(req, res) {
  try {
    const dataOfComments = await prisma?.Comment.findMany();

    if (!dataOfComments) {
      res.status(404).json({ message: "Comment not found!" });
    }
    res
      .status(200)
      .json({ data: dataOfComments, message: "Comment fetched successfully!" });
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: "Error while fetching Comment list!" });
  }
}

async function createComments(req, res) {
  const { comment,blogId} = req.body;
  try {
    const newBlog = await prisma.Comment.create({
      data: {
        comment,
        blogId,
      },
    });
    res.status(201).json(newBlog);
  } catch (err) {
    console.log(err);
    res.status(500).json({ message: "Error creating Comment" });
  }
}


const updateComments = async (req, res) => {
  const id = req.params.id;
  const updateUser = await prisma.Comment.update({
    where: {
      id: id,
    },
    data: {
      ...req.body,
    },
  });

  res.status(200).send({
    message: "Comment updated successfully!",
    data: updateUser,
  });
};

const deleteComments = async (req, res) => {
  const id = req.params.id;
  await prisma.Comment.delete({
    where: { id },
  });
  res.send("delete Comment");
};



module.exports = {
    allComments,
    createComments,
    updateComments,
    deleteComments
}