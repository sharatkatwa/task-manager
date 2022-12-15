
exports.getAllTasks = (req, res, next) => {
    res.send('get all tasks');
};

exports.createTask = (req, res, next) => {
    res.json(req.body);
};

exports.getTask = (req, res, next) => {
    const { id } = req.params;
    res.json({ id });
};

exports.updateTask = (req, res, next) => {
    res.send('Update task');
};

exports.deleteTask = (req, res, next) => {
    res.send('Delete task');
};