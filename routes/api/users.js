const router = require('express').Router();
const user = require('../../models/username');



router.get('/', (req, res) => {
    user.find()
      .then((users) => res.json(users))
      .catch((err) => res.status(500).json(err));
  })

router.get('/:id',(req, res) => {
    user.findOne({ _id: req.params.id })
      .then((user) =>
        !user
          ? res.status(404).json({ message: 'No User with that ID' })
          : res.json(user)
      )
      .catch((err) => res.status(500).json(err));
  })

router.post('/createNewUser', (req, res) => {
    user.create(req.body)
      .then((user) => {
        res.json(user)
      })
      .catch((err) => {
        res.json(err)
      });
  })

  router.put('/updateUser/:id', (req, res) => {
    user.findByIdAndUpdate(
        {_id: params.id},
        req.body,
        )
      .then((updatedUser) => {
        res.json(updatedUser)
      })
      .catch((err) => {
        res.json(err)
      });
  })

  module.exports = router;