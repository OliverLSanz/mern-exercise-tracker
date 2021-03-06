// check for dependecies
const express = require('express');
const cors = require('cors');
const mongoose = require('mongoose');  // to connect to MongoDB

// check for dotenv dependency and configure it
require('dotenv').config();  // to easily set up env variables

// create the express server
const app = express();
const port = process.env.PORT || 5000;

// set up middleware
app.use(cors());
app.use(express.json());

// conect with MongoDB Atlas
const uri = process.env.ATLAS_URI;  // ATLAS_URI is found in ATLAS dashboard
mongoose.connect(uri, { useNewUrlParser: true, useCreateIndex: true }
);
const connection = mongoose.connection;
connection.once('open', () => {
  console.log("MongoDB database connection established succesfully");
});

// require the routers for MongoDB collections
const exercisesRouter = require('./routes/exercises');
const usersRouter = require('./routes/users');

// tell the app to use the routers
app.use('/exercises', exercisesRouter);
app.use('/users', usersRouter);
/* Now, when anyone goes to our-url/exercises, exercisesRouter will load,
and the same happens for our-url/users and usersRouter */

// start server
app.listen(port, () => {
  console.log(`Server is running on port: ${port}`);
});
