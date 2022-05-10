const express = require('express');
const userSchema = require('../models');
const bcryptjs = require('bcryptjs');

const router = express.Router();

router.post('/', async (req, res) => {
  try {
    const hash = await bcryptjs.hash(req.body.password, 8);
    const newUser = await userSchema({ ...req.body, password: hash });
    newUser
      .save()
      .then((data) => res.json({ success: data }))
      .catch((err) => res.json({ failured: err }));
  } catch (error) {
    res.json({ failure: error });
  }
});

router.get('/', (req, res) => {
  userSchema
    .find()
    .then((data) => res.json({ success: data }))
    .catch((err) => res.json({ failured: err }));
});

router.get('/:id', (req, res) => {
  userSchema
    .findById(req.params.id)
    .then((data) => res.json({ success: data }))
    .catch((err) => res.json({ failured: err }));
});

router.put('/:id', async (req, res) => {
  try {
    const hash = await bcryptjs.hash(req.body.password, 8);
    const user = { ...req.body, password: hash };
    userSchema
      .updateOne({ _id: req.params.id }, { $set: user })
      .then((data) => res.json({ success: data }))
      .catch((err) => res.json({ failured: err }));
  } catch (error) {
    res.json({ failure: error });
  }
});

router.delete('/:id', (req, res) => {
  userSchema
    .deleteOne({ _id: req.params.id })
    .then((data) => res.json({ success: data }))
    .catch((err) => res.json({ failured: err }));
});

module.exports = router;
