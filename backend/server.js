// check for dependecies
const express = require('express');
const cors = require('cors');

// check for dotenv dependency and configure it
require('dotenv').config();

// create the express server
const app = express();
const port = process.env.PORT || 5000;

// set up middleware
app.use(cors());
app.use(express.json());

// start server
app.listen(port, () => {
  console.log(`Server is running on port: ${port}`);
});
