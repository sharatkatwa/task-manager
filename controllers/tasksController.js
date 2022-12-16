const { count } = require('../models/taskModel');
const Task = require('../models/taskModel');

exports.getAllTasks = async (req, res, next) => {
  try {
    const tasks = await Task.find();

    res.status(200).json({
      status: 'success',
      tasks,
    });
  } catch (err) {
    res.status(500).json({
      err,
    });
  }
};

exports.createTask = async (req, res, next) => {
  try {
    const createTask = await Task.create(req.body);

    res.status(201).json({
      status: 'success',
      task: createTask,
    });
  } catch (err) {
    res.status(500).json({
      err,
    });
  }
};

exports.getTask = async (req, res, next) => {
  try {
    const { id: taskID } = req.params;
    const task = await Task.findOne({ _id: taskID });

    if (!task) {
      return res
        .status(404)
        .json({ msg: `There is no task with id: ${taskID}` });
    }

    res.status(200).json({
      status: 'success',
      id: taskID,
      task,
    });
  } catch (err) {
    console.log(err);
    res.status(500).json({
      err,
    });
  }
};

exports.deleteTask = async (req, res, next) => {
  try {
    const { id: taskID } = req.params;
    const task = await Task.findOneAndDelete({ _id: taskID });

    if (!task) {
      return res.status(404).json({
        msg: `There is no task with id: ${taskID}`,
      });
    }

    res.status(200).json({
      status: 'success',
      task,
    });
  } catch (err) {
    res.status(500).json({
      err,
    });
  }
};

exports.updateTask = async (req, res, next) => {
  try {
    const { id: taskID } = req.params;
    const updatedTask = await Task.findOneAndUpdate({ _id: taskID }, req.body, {
      new: true,
      runValidators: true,
    });

    if (!updatedTask) {
      return res
        .status(404)
        .json({ msg: `There is no task with id: ${taskID}` });
    }

    res.status(200).json({
      status: 'success',
      id: taskID,
      data: req.body,
    });
  } catch (err) {
    res.status(500).json({
      err,
    });
  }
};
