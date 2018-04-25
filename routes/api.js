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
  console.log(req.body)
  db.addUser(req.body)
  .then(() => {
    res.sendStatus(201)
  })
  .catch((err) => {
    throw err
  })
})

module.exports = router
