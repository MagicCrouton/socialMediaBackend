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
      .then((data) =>
        !data
          ? res.status(404).json({ message: 'No User with that ID' })
          : res.json(data)
      )
      .catch((err) => res.status(500).json(err));
  })

// sample new user post json body
// {
//     "username": "magicCrouton",
//     "email": "e.park5336@gmail.com"
// }

router.post('/', (req, res) => {
    user.create(req.body)
      .then((user) => {
        res.json(user)
      })
      .catch((err) => {
        res.json(err)
      });
  })

router.put('/:id', (req, res) => {
    user.updateOne(
        {_id: req.params.id},
        req.body
        )
      .then((data) => {
        !data
        ? res.status(404).json({ message: 'No User with that ID' })
        : res.json(data)
      })
      .catch((err) => {
        res.json(err)
      });
  })

router.delete('/:id', async (req, res) => {
    // let temp = await user.findById({_id: req.params.id})
    // await thought.deleteMany({_id: {$in: temp.thoughts}})
    await user.deleteOne({_id: req.params.id})
    .then ((data)=> {
      !data
      ? res.status(404).json({ message: 'No User with that ID' })
      : res.json(data)
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