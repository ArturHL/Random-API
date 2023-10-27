const express = require('express')
const PostService = require('../services/post.service')

const router = express.Router()
const Pservice = new PostService()

router.get('/', (req, res) => {
  const posts = Pservice.find()
  res.json(posts)
})

router.post('/', (req, res) => {
  const body = req.body
  res.json({
    Message: 'Created',
    Data: body
  })
})

module.exports = router
