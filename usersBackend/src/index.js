const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
const dotenv = require('dotenv');
const usersRouter = require('./routes');

dotenv.config();

const server = express();
const port = process.env.PORT;

server.use(cors());
server.use(express.json());
server.use('/api/v1/users', usersRouter);
server.use('/', (req, res) => res.json({ usersOnline: true }));

mongoose
  .connect(process.env.CLOUD_MONGODB_URI)
  .then(() => console.log('Users database connected'))
  .catch((err) =>
    console.error(`Users database connection failured - Error: ${err}`)
  );

server.listen(port, () => console.log(`Server running on port ${port}`));
