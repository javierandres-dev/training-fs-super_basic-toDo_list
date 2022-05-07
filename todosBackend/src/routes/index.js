const express = require('express');
const todoSchema = require('../models');

const router = express.Router();

router.post('/', (req, res) => {
  const newTodo = todoSchema(req.body);
  newTodo
    .save()
    .then((data) => res.json({ success: data }))
    .catch((err) => res.json({ failured: err }));
});

router.get('/', (req, res) => {
  todoSchema
    .find()
    .then((data) => res.json({ success: data }))
    .catch((err) => res.json({ failured: err }));
});

router.get('/:id', (req, res) => {
  todoSchema
    .findById(req.params.id)
    .then((data) => res.json({ success: data }))
    .catch((err) => res.json({ failured: err }));
});

router.put('/:id', (req, res) => {
  todoSchema
    .updateOne({ _id: req.params.id }, { $set: req.body })
    .then((data) => res.json({ success: data }))
    .catch((err) => res.json({ failured: err }));
});

router.delete('/:id', (req, res) => {
  todoSchema
    .deleteOne({ _id: req.params.id })
    .then((data) => res.json({ success: data }))
    .catch((err) => res.json({ failured: err }));
});

module.exports = router;
