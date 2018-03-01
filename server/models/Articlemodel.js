const mongoose = require('mongoose')
const Schema = mongoose.Schema

  let articleSchema = new Schema({
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
    author: {
      type: Schema.Types.ObjectId,
      ref:'user'
    },
    image:String
    
  },{timestamps : {}})

  let userModel = mongoose.model('Costumers',articleSchema)

  module.exports = userModel