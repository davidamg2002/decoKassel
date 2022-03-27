const express = require("express");
const {
  loginUser,
  registerUser,
  getUser,
  deleteUser,
} = require("../controllers/userController");
const { protect } = require("../middleware/authMiddleware");

const router = express.Router();

router.post("/", registerUser);
router.post("/login", loginUser);
router.delete("/:id", protect, deleteUser);
router.get("/me", protect, getUser);

module.exports = router;
