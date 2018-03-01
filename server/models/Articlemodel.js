const mongoose = require('mongoose')
const Schema = mongoose.Schema

  let articleSchema = new Schema({
    author: {
      type : Schema.Types.ObjectId,
      ref : 'User'
    },
    title:{
      type:String,
      required:true
    },
    content:{
      type:String,
      required:true
    },
    category:{
      type:String,
      required:true
    },
    image:String
    
  },{timestamps : {}})

  let userModel = mongoose.model('article',articleSchema)

  module.exports = userModel