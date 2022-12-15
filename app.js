const express = require('express');
const tasks = require('./routes/tasks');

const app = express();
port = 3000;

// MIDDLEWARES
app.use(express.json());

// ROUTES
app.get('/', (req, res) => {
    res.send('Task Manager App');
});

app.use('/api/v1/tasks', tasks);


app.listen(port, console.log(`Server is listening to port: ${port}...`));


console.log('Task Manager App');
