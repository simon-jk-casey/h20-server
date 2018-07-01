const express = require('express')
const router = express.Router()

const db = require('../db/db')

// GETS

// POSTS

router.post('/enrol', (req, res) => {
  db.addUser(req.body)
  .then(() => {
    res.sendStatus(201)
  })
  .catch((err) => {
    throw err
  })
})

router.post('/water', (req, res) => {
  db.addWaterway(req.body)
  .then(() => {
    res.sendStatus(201)
  })
  .catch((err) => {
    throw err
  })
})

router.post('/collection', (req, res) => {
  db.addCollectionPoint(req.body)
  .then(() => {
    res.sendStatus(201)
  })
  .catch((err) => {
    throw err
  })
})

router.post('/assessment', (req, res) => {
  db.addAssessment(req.body)
  .then(() => {
    res.sendStatus(201)
  })
  .catch((err) => {
    throw err
  })
})

router.post('/test', (req, res) => {
  console.log(req.body)
  // .then + .catch erroring, removed => promises yo - function before .then() have to return
})

module.exports = router
