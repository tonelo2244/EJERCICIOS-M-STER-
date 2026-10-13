const mongoose = require("mongoose");

const urlDb =
  "mongodb://127.0.0.1:27017/proyecto-basico-express-movies";

const connect = async () => {
  await mongoose.connect(urlDb);
  console.log("Conectado a MongoDB");
};

module.exports = { connect };