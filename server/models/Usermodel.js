const mongoose = require('mongoose')
const Schema = mongoose.Schema

  let userSchema = new Schema({
    userame:{
      type:String,
      required:true
    },
    password:{
      type:String,
      required:true
    }
  },{timestamps : {}})

  let userModel = mongoose.model('user',userSchema)

  module.exports = userModel