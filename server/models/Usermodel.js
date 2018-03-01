const mongoose = require('mongoose')
const Schema = mongoose.Schema

  let userSchema = new Schema({
    username:{
      type:String,
      required:true
    },
    password:{
      type:String,
      required:true
    }
  },{timestamps : {}})

  let userModel = mongoose.model('User',userSchema)

  module.exports = userModel