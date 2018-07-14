const express = require('express')
const app = express()
const path = require('path')
const cookieParser = require('cookie-parser')
const bodyParser = require('body-parser')
const cors = require('cors')

const corsOptions = {
  origin: true,
  methods: 'GET, HEAD, PUT, PATCH, POST, DELETE',
  preflightContinue: false,
  credentials: true
}

const api = require('./routes/api')
const passport = require('./passportSetup')

app.use(cors(corsOptions))
app.use(bodyParser.json())
app.use(bodyParser.urlencoded({ extended: false }))
app.use(cookieParser()) // learn more how this works with express-session
// app.use(express.static(path.join(__dirname, 'public'))) needed?
app.use(require('express-session')({secret: 'squirrel', resave: false, saveUninitialized: false})) // read more on this - sessions
app.use(passport.initialize())
app.use(passport.session())

app.use('/api/v1', api)

module.exports = app
