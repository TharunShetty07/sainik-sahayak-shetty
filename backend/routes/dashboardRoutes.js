const express = require('express');
const router = express.Router();
const { protect, restrictTo } = require('../middleware/authMiddleware');

// Sample route for admin
router.get('/admin/dashboard', protect, restrictTo('admin'), (req, res) => {
  res.json({ message: `Welcome Admin ${req.user.name}` });
});

// Sample route for officer
router.get('/officer/dashboard', protect, restrictTo('officer'), (req, res) => {
  res.json({ message: `Welcome Officer ${req.user.name}` });
});

// Sample route for family member
router.get('/family/dashboard', protect, restrictTo('family'), (req, res) => {
  res.json({ message: `Welcome Family Member ${req.user.name}` });
});

module.exports = router;
