
exports.up = function (knex, Promise) {
  return knex.schema.hasTable('survey').then((exists) => {
    if (!exists) {
      return knex.schema.createTable('survey', (t) => {
        t.increments('id').unsigned().primary()
        t.integer('collectionPointId').notNullable()
        t.string('date')
        // leave Nullable for now - need to capture from device at time of collection.
        t.json('surveyResult').notNullable()
        t.integer('totalScore').notNullable()
      })
    }
  })
}

exports.down = function (knex, Promise) {
  return knex.schema.dropTableIfExists('survey')
}
