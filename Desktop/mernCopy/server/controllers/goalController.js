const asyncHandler = require("express-async-handler");
const Goal = require("../models/goalModel");

const getGoals = asyncHandler(async (req, res) => {
  const goals = await Goal.find({ user: req.user.id });

  res.status(200).json(goals);
});
const setGoal = asyncHandler(async (req, res) => {
  const body = req.body.text;

  if (!body) {
    res.status(400);
    throw new Error("Please provide a text field");
  }

  const goal = await Goal.create({ text: `${body}`, user: req.user.id });

  res.status(200).json(goal);
});
const updateGoal = asyncHandler(async (req, res) => {
  const goal = await Goal.findById(req.params.id);

  if (!goal) {
    res.status(400);
    throw new Error("Goal does not exist");
  }

  // Check for user
  if (!req.user) {
    res.status(401);
    throw new Error("User not found");
  }

  // Make sure logged in user matches goal user
  if (goal.user.toString() !== req.user.id) {
    res.status(401);
    throw new Error("User not authorized");
  }

  const updatedGoal = await Goal.findByIdAndUpdate(goal, body, { new: true });

  res.status(200).json(updatedGoal);
});
const deleteGoal = asyncHandler(async (req, res) => {
  const goal = await Goal.findById(req.params.id);

  if (!goal) {
    res.status(400);
    throw new Error("Goal does not exist");
  }

  // Check for user
  if (!req.user) {
    res.status(401);
    throw new Error("User not found");
  }

  // Check if logged in user matches goal user
  if (goal.user.toString() !== req.user.id) {
    res.status(401);
    throw new Error("User not authorized");
  }

  await goal.remove();
  res
    .status(201)
    .json({ id: req.params.id, message: "Goal has been removed successfully" });
});

module.exports = { getGoals, setGoal, updateGoal, deleteGoal };
