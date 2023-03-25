const router = require('express').Router();
const {user, thought} = require('../../models');


// get all thoughts
router.get('/', (req, res) => {
    thought.find()
      .then((thought) => res.json(thought))
      .catch((err) => res.status(500).json(err));
  })

// get thoughts by _id
router.get('/:id',(req, res) => {
    thought.findOne({ _id: req.params.id })
      .then((thoughtRes) =>
        !thoughtRes
          ? res.status(404).json({ message: 'Nothing Here' })
          : res.json(thoughtRes)
      )
      .catch((err) => res.status(500).json(err));
  })

// create new thought
router.post('/', (req, res) => {
    thought.create(req.body)
      .then((thoughtRes) => {
        res.json(thoughtRes)
      })
      .catch((err) => {
        res.json(err)
      });
  })

// update thought by ID
router.put('/:id', (req, res) => {
    thought.findByIdAndUpdate(
        {_id: params.id},
        req.body,
        )
      .then((thoughtUpdt) => {
        res.json(thoughtUpdt)
      })
      .catch((err) => {
        res.json(err)
      });
  })

// delete user by id need to add code to delete associated thoughts
router.delete('/:id', (req, res) => {
    thought.findByIdAndDelete(
        {_id: params.id}
    )
      .then((data) => {
        res.json(data)
      })
      .catch((err) => {
        res.json(err)
      });
  })

  module.exports = router;