const express = require('express')
const cookieParser = require('cookie-parser')
const path = require('path')
const bodyParser = require('body-parser')
// const cors = require('cors')

const app = express()
//
// const corsOptions = {} later

//uncomment when setup
// const api = require('./routes/api')
// const passport = require('./passportSetup')

// app.use(cors(corsOptions))
app.use(bodyParser.json())
app.use(bodyParser.urlencoded({ extended: false }))
app.use(cookieParser()) // learn more how this works with express-session
// app.use(express.static(path.join(__dirname, 'public'))) -- needed?
app.use(require('express-session')({secret: 'squirrel', resave: false, saveUninitialized: false})) // read more on this

//  uncomment and tidy when passport set
// app.use(passport.initialize())
// app.use(passport.session())

//  uncomment when api routes done
// app.use('/api/v1', api)

module.exports = app
