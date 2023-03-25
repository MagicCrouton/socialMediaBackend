const router = require('express').Router();
const { json } = require('express');
const {thought, user} = require('../../models');


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
// sample json for creating new thought
// {
//   "thought_body": "Here's a cool thought...",
//   "username": "lernantino",
//   "userID": "5edff358a0fcb779aa7b118b"
// }
router.post('/', async (req, res) => {
    await thought.create(req.body)
      .then(async (thoughtRes) => {
       return user.updateOne(
          {_id: req.body.userID},
          {$push: {thoughts: thoughtRes}}
        )
        // console.log(thoughtRes)
        // console.log(req.body.userID)
        // return await user.findOne({_id: req.body.userID})
        // .thoughts.push(thoughtRes)
        // .save(done)
      })
      .then((data) => res.json(data))
      .catch((err) => {
        res.json(err)
      });
  })

// update thought by ID
router.put('/:id', (req, res) => {
    thought.updateOne(
        {_id: req.params.id},
        req.body,
        )
      .then((thoughtUpdt) => {
        !thoughtUpdt
        ? res.status(404).json({ message: 'Nothing Here' })
        : res.json(thoughtUpdt)
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
        !data
        ? res.status(404).json({ message: 'Nothing Here' })
        : res.json(data)
      })
      .catch((err) => {
        res.json(err)
      });
  })

  // sample reaction post
  // {
  //   "reaction_body": "test reaction 1",
  //   "username": "slightlyLessHappyHippo"
  // }
  // sample reaction delete
  // {
  // "reactionId": "641f822b073c5d3fc2c6203e"
  // }

  router.route('/:thoughtId/reactions')
        .post(async (req, res) => {
          await thought.updateOne(
            {_id: req.params.thoughtId},
            {$push: {reactions: req.body}})
          .then((data)=> res.json(data))
          .catch((err)=>res.json(err))
        })
        .delete(async (req, res)=> {
          await thought.updateOne(
            {_id: req.params.thoughtId},
            {$pull:{reactions: { reactionId: req.body.reactionId }}}
          )
        .then((data)=> res.json(data))
        .catch((err)=>res.json(err))
        })

  module.exports = router;