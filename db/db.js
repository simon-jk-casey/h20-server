const Knex = require('knex')
const knexConfig = require('../knexfile')[process.env.NODE_ENV || 'development']
const knex = Knex(knexConfig)

// ADDING DATA
function enrolUser (user) {
  return knex('users').insert(user)
}

function addWaterway (waterway) {
  return knex('waterways').insert(waterway)
}

function addCollectionPoint (collPt) {
  return knex('collectionPoints').insert(collPt)
}

// function addAssessment (assData) {
//   return knex('assessments').insert(assData)
// }

function addAssessment (assData) {
  const { collectionPointId, surveyData, totalScore } = assData
  const surveyResult = {
    collectionPointId: collectionPointId,
    surveyResult: JSON.stringify(surveyData),  //JSON PARSE THIS ON ANY GETS
    totalScore: totalScore
  }
  // console.log(surveyResult)
  return knex('survey').insert(surveyResult)
}

// FETCHING DATA

function getUserByUsername (username) {
  return knex('users').where('username', `${username}`)
}

function getUserById (id) {
  return knex('users').where('id', `${id}`)
}

module.exports = {
  enrolUser,
  addWaterway,
  addCollectionPoint,
  addAssessment,
  getUserByUsername,
  getUserById
}
