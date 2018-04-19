
exports.up = function (knex, Promise) {
  knex.schema.hasTable('waterways').then((exists) => {
    if (!exists) {
      return knex.schema.createTable('waterways', (t) => {
        t.increments('id').unsigned().primary()
        t.string('waterwayName').notNullable()
      })
    }
  })
}

exports.down = function (knex, Promise) {
  return knex.schema.dropTableIfExists('waterways')
}
