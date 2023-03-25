const db = require('../config/connection');
const thought = require('../models/thought');
const user = require('../models/username');


db.once('open', async () => {
  console.log('connected');

 
  await thought.deleteMany({});
  await user.deleteMany({});

  
  const users = [
      {
          username: "happyHippo",
          email: "happyHippo@gmail.com"
      },
      {
          username: "angryHippo",
          email: "angryHippo@gmail.com"
      },
      {
          username: "sadHippo",
          email: "sadHippo@gmail.com"
      },
      {
          username: "hungryHippo",
          email: "hungryHippo@gmail.com"
      }
  ];

  
  const thoughts = [
      {
        thought_body: "I am Happy",
        username: "happyHippo"
      },
      {
          thought_body: "I am Angry",
          username: "angryHippo"
      },
      {
          thought_body: "I am Sad",
          username: "SadHippo"
      },
      {
        thought_body: "i am hungry",
        username: "hungryHippo"
      }
  ]

  
  await user.collection.insertMany(users);

  
  await thought.collection.insertMany(thoughts);

  
  console.log(users);
  console.log(thoughts);
  process.exit(0);
});
