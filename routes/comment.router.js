const express = require('express')
const router = express.Router()

const CommentService = require('../services/comment.service')
const Cservice = new CommentService()

router.get('/', async (req, res) => {
  const comments = await Cservice.find()
  res.json(comments)
})

router.get('/:id', async (req, res) => {
  const { id } = req.params
  const comments = await Cservice.findComments(id)
  res.json(comments)
})

router.post('/', async (req, res) => {
  const comment = req.body
  const createdcomment = await Cservice.create(comment)
  res.json(createdcomment)
})

router.put('/:id', async (req, res) => {
  const { id } = req.params
  const comment = req.body
  const updatedcomment = await Cservice.update(id, comment)
  res.json(updatedcomment)
})

router.delete('/:id', async (req, res) => {
  const { id } = req.params
  const deletedcomment = await Cservice.delete(id)
  res.json(deletedcomment)
})
module.exports = router
