const asyncHandler = require("express-async-handler");
const Goal = require("../models/goalModel");
// @desc Get goals
// @method GET
// @access Private
const getGoals = asyncHandler(async (req, res) => {
  const goals = await Goal.find();
  res.status(200).json(goals);
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
  const goal = await Goal.findById(req.params.id);

  if (!goal) {
    res.status(400);
    throw new Error("Goal not found");
  }
  const updatedGoal = await Goal.findByIdAndUpdate(req.params.id, req.body, {
    new: true,
  });
  res.status(200).json(updatedGoal);
});
// @desc Get goals
// @method DELETE
// @access Private
const deleteGoal = asyncHandler(async (req, res) => {
  const goal = await Goal.findById(req.params.id);

  if (!goal) {
    res.status(400);
    throw new Error("Goal not found");
  }

  // await goal.remove();
  await Goal.remove(goal);
  res.status(200).json({ id: req.params.id, message: "Goal removed" });
});

module.exports = {
  getGoals,
  setGoal,
  updateGoal,
  deleteGoal,
};
