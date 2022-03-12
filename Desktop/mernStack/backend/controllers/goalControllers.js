const asyncHandler = require("express-async-handler");
const Goal = require("../models/goalModel");
// @desc Get goals
// @method GET
// @access Private
const getGoals = asyncHandler(async (req, res) => {
  const goal = await Goal.find();
  res.status(200).json(goal);
});
// @desc Get goals
// @method POST
// @access Private
const setGoal = asyncHandler(async (req, res) => {
  const body = req.body.text;
  if (!body) {
    throw new Error("Please provide a text field");
  }
  const goal = await Goal.create({ text: `${body}` });

  res.status(200).json(goal);
});
// @desc Get goals
// @method PUT
// @access Private
const updateGoal = asyncHandler(async (req, res) => {
  const goal = await Goal.findByIdAndUpdate(req.params.id);

  res.status(200).json({ text: `${goal}` });
});
// @desc Get goals
// @method DELETE
// @access Private
const deleteGoal = asyncHandler(async (req, res) => {
  res.status(200).json({ text: "Delete goals" });
});

module.exports = {
  getGoals,
  setGoal,
  updateGoal,
  deleteGoal,
};
