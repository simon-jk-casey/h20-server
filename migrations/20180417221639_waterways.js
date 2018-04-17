
exports.up = function (knex, Promise) {
  return knex.schema.createTableIfNotExists('waterways', (table) => {
    table.increments('id').primary()
    table.string('waterwayName').notNullable()
  })
}

exports.down = function (knex, Promise) {
  return knex.schema.dropTableIfExists('waterways')
}
