// we need the Express router because this is a router that we are creating
const router = require('express').Router();
// we also need the model for handling the Users MongoDB collection
let User = require('../models/user.model');

// router for GET method at /users/
router.route('/').get((req, res) => {
  User.find()  // mongoose method that lists all users from database (returns a promise)
    .then(users => res.json(users))  // when the find() is done, THEN the response (res) will be the users that find() returns.
    .catch(err => res.status(400).json('Error ' + err));  // if there is a error, response will be a error message.
});

// router for POST requests at /users/add
router.route('/add').post((req, res) => {
  const username = req.body.username;  // get the username from the request

  const newUser = new User({username}); // create the new User

  newUser.save()  // save the new user to MongoDB
    .then(() => res.json('User added!'))  // THEN, the response will be a success message.
    .catch(err => res.status(400).json('Error ' + err));  // IF an error occurrs, response is an error message.
});
/* This is all you need to add the users to the MongoDB database. Don't need to
set up anything at the database after connecting it. The collections will be
created according to de schemas! This is awesome!!
*/

// expor the router. Standard thing to do with all routers.
module.exports = router;

/* In an API you usually will have methods for GET, POST, UPDATE, and DELETE
elements, but with users we will leave it as it is. We will implement all
methods for exercises. */
