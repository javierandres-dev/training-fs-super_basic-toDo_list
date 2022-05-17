const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
const dotenv = require('dotenv');
const todosRouter = require('./routes');

dotenv.config();

const server = express();
const port = process.env.PORT;

server.use(cors());
server.use(express.json());
server.use('/api/v1/todos', todosRouter);
server.use('/', (req, res) => res.json({ todosOnline: true }));

mongoose
  .connect(process.env.CLOUD_MONGODB_URI)
  .then(() => console.log('Todos database connected'))
  .catch((err) =>
    console.error(`Todos database connection failured - Error: ${err}`)
  );

server.listen(port, () => console.log(`Server running on port ${port}`));
