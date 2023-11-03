const express = require('express')
const router = express.Router()

const UsersService = require('../services/user.service')
const Uservice = new UsersService()

router.get('/', async (req, res) => {
  const users = await Uservice.find()
  res.json(users)
})

router.get('/:id', async (req, res) => {
  const { id } = req.params
  const user = await Uservice.findOne(id)
  res.json(user)
})

router.get('/email/:email', async (req, res) => {
  const { email } = req.params
  const user = await Uservice.findByEmail(email)
  res.json(user)
})

router.post('/', async (req, res) => {
  const user = req.body
  const createdUser = await Uservice.create(user)
  res.json(createdUser)
})

router.put('/:id', async (req, res) => {
  const { id } = req.params
  const changes = req.body
  const updatedUser = await Uservice.update(id, changes)
  res.json(updatedUser)
})

router.delete('/:id', async (req, res) => {
  const { id } = req.params
  const deletedUser = await Uservice.delete(id)
  res.json(deletedUser)
})

module.exports = router
