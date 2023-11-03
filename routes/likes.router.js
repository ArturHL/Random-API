const express = require('express')
const router = express.Router()

const LikeService = require('../services/like.service')
const LService = new LikeService()

router.get('/', async (req, res) => {
  const likes = await LService.find()
  res.json(likes)
})

router.get('/:userId/:postId', async (req, res) => {
  const { userId, postId } = req.params
  const likes = await LService.findOne(userId, postId)
  res.json(likes)
})

router.post('/', async (req, res) => {
  const like = req.body
  const createdlike = await LService.create(like)
  res.json(createdlike)
})

router.put('/:id', async (req, res) => {
  const { id } = req.params
  const like = req.body
  const updatedlike = await LService.update(id, like)
  res.json(updatedlike)
})

router.delete('/:userId/:postId', async (req, res) => {
  const { userId, postId } = req.params
  const deletedlike = await LService.delete(userId, postId)
  res.json(deletedlike)
})
module.exports = router
