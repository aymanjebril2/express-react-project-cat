import Cat from "../models/cat.js";

const createCat = async (req, res) => {
  console.log(req.body);
  try {
    const cat = await new Cat(req.body);
    await cat.save();
    return res.status(201).send(cat);
  } catch (error) {
    return res.status(500).json({ error: error.message });
  }
};

const getAllCats = async (req, res) => {
  try {
    const cats = await Cat.find();
    return res.status(200).send(cats);
  } catch (error) {
    return res.status(500).send(error.message);
  }
};
const getCatById = async (req, res) => {
  try {
    const { id } = req.params;
    const cat = await Cat.findById(id);
    if (cat) {
      return res.status(200).send(cat);
    }
    return res.status(404).send("cat with the specified ID does not exist");
  } catch (error) {
    return res.status(500).send(error.message);
  }
};
const updateCat = async (req, res) => {
  try {
    const { id } = req.params;
    await Cat.findByIdAndUpdate(id, req.body, { new: true }, (err, cat) => {
      if (err) {
        res.status(500).send(err);
      }
      if (!cat) {
        res.status(404).send("Item not found!");
      }
      return res.status(200).json(cat);
    });
  } catch (error) {
    return res.status(500).send(error.message);
  }
};
const deleteCat = async (req, res) => {
  try {
    const { id } = req.params;
    const deleted = await Cat.findByIdAndDelete(id);
    if (deleted) {
      return res.status(200).send("cat deleted");
    }
    throw new Error(" cat not found");
  } catch (error) {
    return res.status(500).send(error.message);
  }
};

export default { createCat, getAllCats, getCatById, deleteCat, updateCat };
