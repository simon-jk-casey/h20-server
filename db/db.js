const Knex = require('knex')
const knexConfig = require('./knexfile')[process.env.NODE_ENV || 'development']
const knex = Knex(knexConfig)

// ADDING DATA
export function addUser (user) {
  return knex(user)
}
// FETCHING DATA
