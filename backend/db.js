const mongoose = require("mongoose");

async function connectDB() {
  await mongoose.connect("mongodb+srv://admin:admin@cluster0.hle7ayi.mongodb.net/vitalgear?retryWrites=true&w=majority&appName=Cluster0");
}

connectDB();
// module.exports = connectDB;


// console.log(db);

const userSchema = mongoose.Schema({
  username: String,
  firstname: String,
  lastname: String,
  password: String,
});

const User = mongoose.model("User", userSchema);

module.exports =  User 
