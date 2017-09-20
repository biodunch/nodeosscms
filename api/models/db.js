const mongoose = require("mongoose");
//We are telling mongoose to use node's Promise Library
mongoose.Promise = global.Promise;
const URI = process.env.DATABASE;
mongoose.connect(URI);
mongoose.connection.on("connected", () => {
  console.log("Connected to", URI);
});

mongoose.connection.on("error", error => {
  console.error(`Error connecting to ${URI}`, error);
});

mongoose.connection.on("disconnected", () => {
  console.log("Disconnected from", URI);
});
// require each mongoose schema here so we can have a single instance (singleton)
// of all schemas throughout the application

require('./Principal');
