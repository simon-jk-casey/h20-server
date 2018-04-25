const express = require('express')
const router = express.Router()

const db = require('../db/db')

// GETS

// this is a bullshit get to test the api endpoint, hint: it works
router.get('/', (req, res) => {
  console.log('hit')
})

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

module.exports = router
