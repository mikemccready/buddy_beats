const mongoose = require('mongoose');
const Schema = mongoose.Schema;


const userSchema = new Schema({
  username: { type:String  }, //String,required: true, unique: true
  board: { type: Array  }, //, required: true
});


module.exports = mongoose.model('User', userSchema);


