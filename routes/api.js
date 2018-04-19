var express = require('express')
var router = express.Router()

// GETS

// this is a bullshit get to test the api endpoint, hint: it works
router.get('/', (req, res) => {
  console.log('hit')
})

// POSTS

router.post('/enrol', (req, res) => {
  console.log(req.body)
})

module.exports = router
