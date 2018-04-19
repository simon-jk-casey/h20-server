
exports.up = function (knex, Promise) {
  knex.schema.hasTable('assessment').then((exists) => {
    if (!exists) {
      return knex.schema.createTableIfNotExists('assessments', (t) => {
        t.increments('id').unsigned().primary()
        t.integer('collectionPointId').notNullable()
        t.string('date')
        // leave Nullable for now - need to capture from device at time of collection.
        t.integer('q1a').notNullable()
        t.integer('q1b').notNullable()
        t.integer('q1c').notNullable()
        t.integer('q1d').notNullable()
        t.integer('q1e').notNullable()
        t.integer('q1f').notNullable()
        t.integer('q2a').notNullable()
        t.integer('q2b').notNullable()
        t.integer('q2c').notNullable()
        t.integer('q2d').notNullable()
        t.integer('q2e').notNullable()
        t.integer('q3a').notNullable()
        t.integer('q3b').notNullable()
        t.integer('q3c').notNullable()
        t.integer('q3d').notNullable()
        t.integer('q3e').notNullable()
        t.integer('q4a').notNullable()
        t.integer('q4b').notNullable()
        t.integer('q4c').notNullable()
        t.integer('q4d').notNullable()
        t.integer('q4e').notNullable()
        t.integer('q5a').notNullable()
        t.integer('q5b').notNullable()
        t.integer('q5c').notNullable()
        t.integer('q5d').notNullable()
        t.integer('q5e').notNullable()
        t.integer('totalScore').notNullable()
      })
    }
  })
}

exports.down = function (knex, Promise) {
  return knex.schema.dropTableIfExists('assessments')
}
