const router = require('express').Router();
const {user, thought} = require('../../models');



router.get('/', async (req, res) => {
    await user.find({})
      .then((users) => {
        res.json(users)
      })
      .catch((err) => res.status(500).json(err));
  })

router.get('/:id',(req, res) => {
    user.findOne({ _id: req.params.id })
    .populate('thoughts')
    .populate('friends')
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
    user.updateOne(
        {_id: params.id},
        req.body
        )
      .then((updatedUser) => {
        res.json(updatedUser)
      })
      .catch((err) => {
        res.json(err)
      });
  })

router.delete('/:id', async (req, res) => {
    await user.deleteOne({_id: req.params.id})
    .then ((data)=> {
      thought.deleteMany({_id: {$in: data.thoughts}})
    })
    .then((data)=> res.json(data))
    .catch((err)=>res.json(err))
})

// updating and delting friends from the users
router.route('/:userId/friends/:friendId')
      .post(async (req, res) => {
        let temp = await user.findOne({_id: req.params.friendId})
        await user.updateOne({_id: req.params.userId},{$push: {friends: temp}})
        .then((data)=> res.json(data))
        .catch((err)=>res.json(err))
      })
      .delete(async (req, res)=> {
        await user.updateOne(
          {_id: req.params.userId},
          {$pull:{friends: req.params.friendId}}
        )
      .then((data)=> res.json(data))
      .catch((err)=>res.json(err))
      })
  module.exports = router;