const Task = require('../models/taskModel');
const asyncWrapper = require('../middleware/async');
const { createCustomError } = require('../errors/custom-error');

exports.getAllTasks = asyncWrapper(async (req, res, next) => {
  const tasks = await Task.find();

  res.status(200).json({
    status: 'success',
    results: tasks.length,
    tasks,
  });
});

exports.createTask = asyncWrapper(async (req, res, next) => {
  const createTask = await Task.create(req.body);

  res.status(201).json({
    status: 'success',
    task: createTask,
  });
});

exports.getTask = asyncWrapper(async (req, res, next) => {
  const { id: taskID } = req.params;
  const task = await Task.findOne({ _id: taskID });

  if (!task) {
    return next(createCustomError(`There is no task with id: ${taskID}`, 404));
    return res.status(404).json({ msg: `There is no task with id: ${taskID}` });
  }

  res.status(200).json({
    status: 'success',
    id: taskID,
    task,
  });
});

exports.deleteTask = asyncWrapper(async (req, res, next) => {
  const { id: taskID } = req.params;
  const task = await Task.findOneAndDelete({ _id: taskID });

  if (!task) {
    return next(createCustomError(`There is no task with id: ${taskID}`, 404));
  }

  res.status(200).json({
    status: 'success',
    task,
  });
});

exports.updateTask = asyncWrapper(async (req, res, next) => {
  const { id: taskID } = req.params;
  const updatedTask = await Task.findOneAndUpdate({ _id: taskID }, req.body, {
    new: true,
    runValidators: true,
  });

  if (!updatedTask) {
    return next(createCustomError(`There is no task with id: ${taskID}`, 404));
  }

  res.status(200).json({
    status: 'success',
    task: updatedTask,
  });
});
