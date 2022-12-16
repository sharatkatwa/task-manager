const express = require('express');
const tasks = require('./routes/tasks');
const connectDB = require('./db/connect');

const app = express();
port = 3000;

// MIDDLEWARES
app.use(express.json());

// ROUTES
app.get('/', (req, res) => {
  res.send('Task Manager App');
});

app.use('/api/v1/tasks', tasks);

const start = async () => {
  try {
    await connectDB(process.env.MONGO_URI);
    app.listen(port, console.log(`Server is listening to port: ${port}...`));
  } catch (err) {
    console.log(err);
  }
};

start();
console.log('Task Manager App');
