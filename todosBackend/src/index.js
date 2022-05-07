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
//server.use('/', (req, res) => res.json({ online: true }));
server.use('/api/v1/todos', todosRouter);

mongoose
  .connect(process.env.MONGODB_URI)
  .then(() => console.log('Database connected'))
  .catch((err) =>
    console.error(`Database connection failured - Error: ${err}`)
  );

server.listen(port, () => console.log(`Server running on port ${port}`));
