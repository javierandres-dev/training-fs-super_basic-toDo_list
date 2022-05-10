const express = require('express');
const todoSchema = require('../models');
const jwt = require('jsonwebtoken');
const dotenv = require('dotenv');

const router = express.Router();

dotenv.config();

router.post('/', verifyToken, (req, res) => {
  const newTodo = todoSchema(req.body);
  newTodo
    .save()
    .then((data) => res.json({ success: data }))
    .catch((err) => res.json({ failured: err }));
});

router.get('/', verifyToken, (req, res) => {
  todoSchema
    .find()
    .then((data) => res.json({ success: data }))
    .catch((err) => res.json({ failured: err }));
});

router.get('/:id', verifyToken, (req, res) => {
  todoSchema
    .findById(req.params.id)
    .then((data) => res.json({ success: data }))
    .catch((err) => res.json({ failured: err }));
});

router.put('/:id', verifyToken, (req, res) => {
  todoSchema
    .updateOne({ _id: req.params.id }, { $set: req.body })
    .then((data) => res.json({ success: data }))
    .catch((err) => res.json({ failured: err }));
});

router.delete('/:id', verifyToken, (req, res) => {
  todoSchema
    .deleteOne({ _id: req.params.id })
    .then((data) => res.json({ success: data }))
    .catch((err) => res.json({ failured: err }));
});

function verifyToken(req, res, next) {
  try {
    if (!req.headers.authorization) {
      res.json({ failure: 'access denied' });
    } else {
      const token = req.headers.authorization.split(' ')[1];
      if (!token) {
        res.json({ failure: 'access denied' });
      } else {
        const payload = jwt.verify(token, process.env.PRIVATE_KEY);
        req.userName = payload.name;
        next();
      }
    }
  } catch (error) {
    res.json({ failured: error });
  }
}

module.exports = router;
