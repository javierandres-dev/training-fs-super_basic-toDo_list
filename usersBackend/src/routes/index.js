const express = require('express');
const User = require('../models');
const bcryptjs = require('bcryptjs');
const jwt = require('jsonwebtoken');
const dotenv = require('dotenv');

const router = express.Router();

dotenv.config();

router.post('/', async (req, res) => {
  try {
    const hash = await bcryptjs.hash(req.body.password, 8);
    const newUser = await User({ ...req.body, password: hash });
    newUser
      .save()
      .then((data) => res.json({ success: true }))
      .catch((err) => res.json({ failured: err }));
  } catch (error) {
    res.json({ failure: error });
  }
});

router.get('/', (req, res) => {
  User.find()
    .then((data) => res.json({ success: data }))
    .catch((err) => res.json({ failured: err }));
});

router.get('/:id', (req, res) => {
  User.findById(req.params.id)
    .then((data) => res.json({ success: data }))
    .catch((err) => res.json({ failured: err }));
});

router.put('/:id', async (req, res) => {
  try {
    const hash = await bcryptjs.hash(req.body.password, 8);
    const user = { ...req.body, password: hash };
    User.updateOne({ _id: req.params.id }, { $set: user })
      .then((data) => res.json({ success: data }))
      .catch((err) => res.json({ failured: err }));
  } catch (error) {
    res.json({ failure: error });
  }
});

router.delete('/:id', (req, res) => {
  User.deleteOne({ _id: req.params.id })
    .then((data) => res.json({ success: data }))
    .catch((err) => res.json({ failured: err }));
});

router.post('/login', async (req, res) => {
  try {
    const user = await User.findOne({
      email: req.body.username,
    });
    if (!user) {
      res.json({ failure: 'access denied' });
    } else {
      if (await bcryptjs.compare(req.body.password, user.password)) {
        const token = jwt.sign(
          {
            name: user.name,
          },
          process.env.PRIVATE_KEY,
          {
            expiresIn: '1h',
          }
        );
        res.json({ success: token });
      } else {
        res.json({ failure: 'access denied' });
      }
    }
  } catch (error) {
    res.json({ failure: error });
  }
});

module.exports = router;
