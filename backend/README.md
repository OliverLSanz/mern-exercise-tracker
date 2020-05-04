### Environment variables
Server.js uses dotenv to load a .env file located in the same directory.
For security reasons this file is git ignored. The env variables that should
be defined are:

ATLAS_URI -> The URI that is provided by MongoDB Atlas for connection, with
  the <password> field substituted with the user's password.
