const express = require('express')

const crudModel = require('../models/Crud.model')
const crudRouter = express.Router()

crudRouter.get('/', async (req, res) => {
  try {
    const user = await crudModel.find()
    res.status(200).send(user)
  } catch (err) {
    res.status(500).send({ message: err.message })
  }
})

crudRouter.post('/post', async (req, res) => {
  const { name, age, city, state } = req.body
  try {
    const user = await crudModel.create({ name, age, city, state })
    user.save()
    res.status(200).send(user)
  } catch (err) {
    res.status(500).send({ message: err.message })
  }
})

crudRouter.delete('/delete/:id', async (req, res) => {
  const userId = req.params.id
  try {
    const user = await crudModel.findByIdAndDelete({ _id: userId })
    res.status(200).send(user)
  } catch (err) {
    res.status(500).send({ message: err.message })
  }
});

crudRouter.patch('/edit/:id', async (req, res) => {
  try {
    const user = await crudModel.findByIdAndUpdate(req.params.id, req.body)
    user.save()
    res.status(200).send(user)
  } catch (err) {
    res.status(500).send({ message: err.message })
  }
})

module.exports = crudRouter
