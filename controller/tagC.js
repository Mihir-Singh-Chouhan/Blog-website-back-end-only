const { PrismaClient } = require("@prisma/client");
const prisma = new PrismaClient();

// curd for Tag

async function allTags(req, res) {
  try {
    const dataOfTags = await prisma?.Tag.findMany();

    if (!dataOfTags) {
      res.status(404).json({ message: "Tag not found!" });
    }
    res
      .status(200)
      .json({ data: dataOfTags, message: "Tag fetched successfully!" });
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: "Error while fetching Tag list!" });
  }
}

async function createTags(req, res) {
  const { name,blogIDs} = req.body;
  try {
    const newTag = await prisma.Tag.create({
      data: {
        name,
        blogIDs,
      },
    });
    res.status(201).json(newTag);
  } catch (err) {
    console.log(err);
    res.status(500).json({ message: "Error creating Tag" });
  }
}


const updateTags = async (req, res) => {
  const id = req.params.id;
  const updateUser = await prisma.Tag.update({
    where: {
      id: id,
    },
    data: {
      ...req.body,
    },
  });

  res.status(200).send({
    message: "Tag updated successfully!",
    data: updateUser,
  });
};

const deleteTags = async (req, res) => {
  const id = req.params.id;
  await prisma.Tag.delete({
    where: { id },
  });
  res.send("delete Tag");
};


module.exports  ={
    allTags,
    createTags,
    updateTags,
    deleteTags
}