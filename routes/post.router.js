const express = require('express')
const router = express.Router()

const PostService = require('../services/post.service')
const Pservice = new PostService()

router.get('/', async (req, res) => {
  const posts = await Pservice.find()
  res.json(posts)
})

router.get('/:id', async (req, res) => {
  const { id } = req.params
  const post = await Pservice.findOne(id)
  res.json(post)
})

router.post('/', async (req, res) => {
  const post = req.body
  const createdPost = await Pservice.create(post)
  res.json(createdPost)
})

router.put('/:id', async (req, res) => {
  const { id } = req.params
  const post = req.body
  const updatedPost = await Pservice.update(id, post)
  res.json(updatedPost)
})

router.delete('/:id', async (req, res) => {
  const { id } = req.params
  const deletedPost = await Pservice.delete(id)
  res.json(deletedPost)
})
module.exports = router
