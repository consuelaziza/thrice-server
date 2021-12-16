const { Schema, model } = require("mongoose");

// 1. Define your schema
let UserSchema = new Schema({
  name: String, 
    email: {
    type: String,
    required: true
    },
    passwordHash: {
        type: String,
        required: true
    },
    lastname: {
    type: String,
    maxlength: 50
    },
    cart: {
      type: Array,
      default: []
  },
    history: {
      type: Array,
      default: []
  },
    
    image: String,
})


const UserModel = model('user', UserSchema)

module.exports = UserModel