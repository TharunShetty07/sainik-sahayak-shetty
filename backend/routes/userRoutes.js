const express = require("express");
const router = express.Router();
const User = require("../models/User"); 
const { getAllUsers, addSoldier, deleteSoldier } = require("../controllers/userController");

// Get all users
router.get("/", getAllUsers);

// Add a new soldier
router.post("/add", addSoldier);

// Delete a soldier
router.delete("/:id", deleteSoldier);

// POST /api/users
router.post("/", async (req, res) => {
  try {
    const user = new User(req.body);
    await user.save();
    res.status(201).json(user);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
});

// GET /api/users
router.get("/", async (req, res) => {
  try {
    const users = await User.find();
    res.json(users);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
});

// DELETE /api/users/:id
router.delete("/:id", async (req, res) => {
  try {
    await User.findByIdAndDelete(req.params.id);
    res.json({ message: "Deleted" });
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
});

module.exports = router;


module.exports = router;
