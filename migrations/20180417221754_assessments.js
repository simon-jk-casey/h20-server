
exports.up = function (knex, Promise) {
  return knex.schema.createTableIfNotExists('assessments', (table) => {
    table.increments('id').primary()
    table.integer('collectionPointId').notNullable()
    table.string('date')
// leave Nullable for now - need to capture from device at time of collection.
    table.integer('q1a').notNullable()
    table.integer('q1b').notNullable()
    table.integer('q1c').notNullable()
    table.integer('q1d').notNullable()
    table.integer('q1e').notNullable()
    table.integer('q1f').notNullable()
    table.integer('q2a').notNullable()
    table.integer('q2b').notNullable()
    table.integer('q2c').notNullable()
    table.integer('q2d').notNullable()
    table.integer('q2e').notNullable()
    table.integer('q3a').notNullable()
    table.integer('q3b').notNullable()
    table.integer('q3c').notNullable()
    table.integer('q3d').notNullable()
    table.integer('q3e').notNullable()
    table.integer('q4a').notNullable()
    table.integer('q4b').notNullable()
    table.integer('q4c').notNullable()
    table.integer('q4d').notNullable()
    table.integer('q4e').notNullable()
    table.integer('q5a').notNullable()
    table.integer('q5b').notNullable()
    table.integer('q5c').notNullable()
    table.integer('q5d').notNullable()
    table.integer('q5e').notNullable()
    table.integer('totalScore').notNullable()
  })
}

exports.down = function (knex, Promise) {
  return knex.schema.dropTableIfExists('assessments')
}
