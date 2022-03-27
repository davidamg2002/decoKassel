const asyncHandler = require("express-async-handler");
const User = require("../models/userModel");
const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");

// @desc Get User
// @method GET
const registerUser = asyncHandler(async (req, res) => {
  const { name, email, password } = req.body;

  if (!name || !email || !password) {
    res.status(400);
    throw new Error("Please fill all required fields");
  }

  const salt = await bcrypt.genSalt(10);

  const hashPassword = await bcrypt.hash(password, salt);

  const user = await User.create({
    name,
    email,
    password: hashPassword,
  });

  if (user) {
    const { id, name, email } = user;
    res.status(200).json({
      _id: id,
      name,
      email,
      token: generateToken(id),
    });
  } else {
    res.status(404);
    throw new Error("Invalid User");
  }
});

const loginUser = asyncHandler(async (req, res) => {
  const { email, password } = req.body;

  if (!email || !password) {
    res.status(400);
    throw new Error("Please enter a valid email or password");
  }
  const user = await User.findOne({ email });

  const newPassword = await bcrypt.compare(password, user.password);

  if (user && newPassword) {
    const { id, name, email } = user;
    res.status(200).json({
      _id: id,
      name,
      email,
      token: generateToken(id),
      message: "User successfully logged in",
    });
  } else {
    res.status(400);
    throw new Error("User not registered");
  }
});

const getUser = asyncHandler(async (req, res) => {
  if (req.user) {
    const { id, name, email } = req.user;

    res.status(200).json({
      id,
      name,
      email,
      message: "User displayed",
    });
  } else {
    res.status(400);
    throw new Error("User not found");
  }
});

const deleteUser = asyncHandler(async (req, res) => {
  const { id } = req.params;
  const user = await User.findById(`${id}`);

  if (!user) {
    res.status(400);
    throw new Error("User does not exist");
  }
  await user.remove();

  res
    .status(200)
    .json({ id: `${req.params.id}`, message: "User successfully deleted" });
});

// Get User
const generateToken = (id) => {
  return jwt.sign({ id }, process.env.JWT_SECRET, { expiresIn: "30d" });
};

module.exports = { loginUser, registerUser, getUser, deleteUser };
