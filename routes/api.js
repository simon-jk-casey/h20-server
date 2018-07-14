const express = require('express')
const router = express.Router()
const bcrypt = require('bcrypt')
const passport = require('../passportSetup')

const db = require('../db/db')

const saltRounds = 10

function ensureAuthorised (req, res, next) {
  if (req.isAuthenticated()) {
    return next()
  } else {
    res.send('Unauthorised')
  }
}
// GETS

// POSTS

router.post('/enrol', (req, res) => {
  const {name, password, address, phoneNum, email, admin} = req.body
  bcrypt.hash(password, saltRounds, (err, hash) => {
    if (err) console.log(err)
    else {
      const userObject = {
        name,
        password: hash,
        address,
        phoneNum,
        email,
        admin
      }
      db.enrolUser(userObject)
      .then(() => res.json({status: 200, message: 'OK'}))
      .catch((err) => {
        console.log(err)
        // res.send(err)
      })
    }
  })
})

router.post('/login', passport.authenticate('local'), (req, res) => {
  res.json({user: req.user})
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
    // res.sendStatus(201)
    console.log(req.body)
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
