const Model = require('../models/Articlemodel')

class Article {

  static findAll(req, res) {
    Model.find({}).populate('author').exec((err,data)=>{
      if(err){
        res.status(500).json({ message: err })
      }else {
        res.status(200).json({ message: 'item has been created', data: data })
      }
    })
  }

  static create(req, res) {
    console.log(req.user)
    console.log(req.user._id)
    let obj = {
      author : req.user.id,
      title : req.body.title,
      category:req.body.category,
      image : req.cloudStoragePublicUrl,
      content : req.body.content
    }
    Model.create(obj,function(err,data){
      if(err){
        res.status(500).json({ message: err })
      }else {
        res.status(200).json({ message: 'item has been created', data: data })
      }
    })
  }

  static remove(req, res) {
    Model.findByIdAndRemove(req.params.id).then(item => {
      res.status(200).json({ message: 'items has been deleted',data : item})
    }).catch(err => {
      es.status(500).json({ message: err })
    })
  }

  static update(req, res) {
    let obj = {
      author : req.user.id,
      title : req.body.title,
      category:req.body.category,
      image : req.cloudStoragePublicUrl,
      content : req.body.content
    }
    Model.findByIdAndUpdate(req.params.id, obj,{new:true}).then(item => {
      res.status(200).json({ message: 'item has been updated', data: item })
    })
      .catch(err => {
        res.status(500).json({ message: err })
      })
  }

  static findone(req, res) {
    Model.findById(req.params.id).populate('author').exec((err,data)=>{
      if(err){
        res.status(500).json({ message: err })
      }else {
        res.status(200).json({ message: 'item has been created', data: data })
      }
    })
  }

  static findMyOwn(req, res){
    Model.find({author: req.user._id}).populate('author')
    .then(data => {
      res.status(200).json({ message: 'data finded', data: data })
    })
    .catch(err => {
      res.status(500).json({ message: err })
    })
  }

  static findByAuthor(req, res){
    Model.find({author: req.params.id})
    .exec((err,data)=>{
      if(err){
        res.status(500).json({ message: err })
      }else {
        res.status(200).json({ message: 'item has been created', data: data })
      }
    })
  }

  static findByCategory(req, res){
    Model.find({category : req.body.category})
    .then(data => {
      res.status(200).json({ message: 'data finded', data: data })
    })
    .catch(err => {
      res.status(500).json({ message: err })
    })
  }
}
module.exports = Article