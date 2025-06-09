const User = require("../models/User");

// GET all users
const getAllUsers = async (req, res) => {
  try {
    const users = await User.find(); // return all users
    res.json(users);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};

// POST add a new soldier
const addSoldier = async (req, res) => {
  try {
    const { name, email, password, role, rank, postingArea, serviceYears, age } = req.body;

    const newSoldier = new User({
      name,
      email,
      password, // In real projects, hash this
      role,
      rank,
      postingArea,
      serviceYears,
      age
    });

    await newSoldier.save();
    res.status(201).json(newSoldier);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};

// DELETE a soldier
const deleteSoldier = async (req, res) => {
  try {
    const { id } = req.params;
    await User.findByIdAndDelete(id);
    res.json({ message: "Soldier deleted" });
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};

module.exports = { getAllUsers, addSoldier, deleteSoldier };
