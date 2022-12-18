const express = require('express');
const tasks = require('./routes/tasks');
const connectDB = require('./db/connect');
const notFound = require('./middleware/not-found');

const app = express();
port = 3000;

// MIDDLEWARES
app.use(express.static('./public'));
app.use(express.json());

// ROUTES

app.use('/api/v1/tasks', tasks);
app.use(notFound);

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
