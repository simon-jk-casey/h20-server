const Knex = require('knex')
const knexConfig = require('./knexfile')[process.env.NODE_ENV || 'development']
const knex = Knex(knexConfig)

// ADDING DATA
export function addUser (user) {
  return knex('users').insert(user)
}

export function addWaterway (waterway) {
  return knex('waterways').insert(waterway)
}

export function addCollectionPoint (collPt) {
  return knex('collectionPoints').insert(collPt)
}

export function addAssessment (assData) {
  return knex('assessments').insert(assData)
}

// FETCHING DATA
