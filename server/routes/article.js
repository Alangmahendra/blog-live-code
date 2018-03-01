const express = require('express');
const router = express.Router();
const Article = require('../controllers/Articlecontroler')
const auth = require('../auth/auth')
const midle = require('../auth/image')

    router.get('/',Article.findAll)
    router.post('/',auth.isLogin,midle.multer.single('image'),midle.sendUploadToGCS,Article.create)
    router.get('/mine',auth.isLogin,Article.findMyOwn)
    router.delete('/:id',auth.isLogin,Article.remove)
    router.put('/:id',auth.isLogin,midle.multer.single('image'),midle.sendUploadToGCS,Article.update)
    router.get('/:id',Article.findone)
    router.get('/author/:id',Article.findByAuthor)
module.exports=router;