const router = require('express').Router();
const bcrypt = require('bcryptjs');

const Auth = require('./auth-model')
const generateToken = require('../token-generator')

router.post('/login', (req, res) => {
  let { username, password } = req.body;

  if (username && password) {
    Auth.findBy({ username })
      .first()
      .then(user => {
        if (user && bcrypt.compareSync(password, user.password)) {
          const token = generateToken(user);
          res.status(200).json({
            message: `Welcome ${user.username}!`,
            token: token,
          });
        } else {
          res.status(401).json({ message: 'Invalid Credentials' });
        }
      })
      .catch(error => {
        res.status(500).json(error.message);
      });
  } else {
    res.status(404).json({ message: 'Kindly provide credentials' });
  }
});


router.post('/register', (req, res) => {
  let user = req.body;

  if (user.username && user.password) {
    const hash = bcrypt.hashSync(user.password, 10);
    user.password = hash;

    Auth.add(user)
      .then(savedUser => {
        res.status(201).json(savedUser);
      })
      .catch(error => {
        res.status(500).json(error.message);
      });
  } else {
    res.status(404).json({ message: 'Kindly provide credentials' });
  }
});

module.exports = router;