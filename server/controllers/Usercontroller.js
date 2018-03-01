const Model = require('../models/Usermodel')
const jwt = require('jsonwebtoken')
const bcrypt = require('bcryptjs')
require('dotenv').config()

class User {
  static signup(req, res) {
    Model.findOne({ username: req.body.username }, function (err, rows) {
      if (rows) {
        res.json({ message: `username ini sudah terpakai` })
      } else {
        bcrypt.genSalt(10, function (err, salt) {
          bcrypt.hash(req.body.password, salt, function (err, hash) {
            let obj = {
              username: req.body.username,
              password: hash
            }
            Model.create(obj, (err, rows) => {
              if (err) {
                res.status(500).json({ message: err })
              } else {
                res.status(200).json({ message: 'terdaftar', data: rows })
              }
            })
          })
        })
      }
    })
  }
  static signin(req, res) {
    Model.findOne({ username: req.body.username }, function (err, user) {
      if (err) {
        res.status(500).json({ message: err })
      } else {
        bcrypt.compare(req.body.password, user.password, function (err, data) {
          if (!err) {
            let payload = {
              id: user._id,
              username: user.username
            }
            jwt.sign(payload, process.env.SECRET_KEY, function (err, token) {
              if (err) {
                res.status(500).json({ message: err })
              } else {
                res.status(200).json({ token: token })
              }
            })
          }
          else {
            res.status(500).json({ message: err })
          }
        })
      }
    })
  }
}
module.exports = User
