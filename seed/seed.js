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


  
  await user.collection.insertMany(users);


  
  console.log(users);
  process.exit(0);
});
