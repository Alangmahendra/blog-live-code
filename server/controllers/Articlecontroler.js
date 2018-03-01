const Model = require('../models/Articlemodel')

class Article {

  static findAll(req, res) {
    Model.find({}).populate('author').then(data => {
      res.status(200).json({ message: 'all data', data: data })
    })
      .catch(err => {
        res.status(500).json({ message: err })
      })
  }

  static create(req, res) {
    let obj = {
      author : req.user._id,
      title : req.body.title,
      categoty:req.body.categoty,
      image : req.cloudStoragePublicUrl,
      content : req.body.content
    }
    Model.create(obj).then(item => {
      res.status(200).json({ message: 'item has been created', data: item })
    })
      .catch(err => {
        res.status(500).json({ message: err })
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
      author : req.user._id,
      title : req.body.title,
      categoty:req.body.categoty,
      image : req.cloudStoragePublicUrl,
      content : req.body.content
    }
    Model.findByIdAndUpdate(req.params.id, obj).then(item => {
      res.status(200).json({ message: 'item has been updated', data: item })
    })
      .catch(err => {
        res.status(500).json({ message: err })
      })
  }

  static findone(req, res) {
    Model.findById(req.params.id).populate('author').then(data => {
      res.status(200).json({ message: 'data finded', data: data })
    })
      .catch(err => {
        res.status(500).json({ message: err })
      })
  }

  static findMyOwn(req, res){
    Model.find({author: req.user._id})
    .then(data => {
      res.status(200).json({ message: 'data finded', data: data })
    })
    .catch(err => {
      res.status(500).json({ message: err })
    })
  }
}
module.exports = Article