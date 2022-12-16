const mongoose = require('mongoose');

const TaskSchema = mongoose.Schema({
  name: {
    type: String,
    required: [true, 'Task name cannot be empty'],
    trim: true,
    maxLength: [50, 'Task cannot be more then 50 charecters'],
  },
  completed: {
    type: Boolean,
    default: false,
  },
});

module.exports = mongoose.model('Tasks', TaskSchema);
