
exports.up = function (knex, Promise) {
  return knex.schema.createTableIfNotExists('waterways', (table) => {
    table.increments('id').primary()
    table.string('waterwayName').notNullable()
    table.integer('farmerId').unsigned().notNullable()
  })
}

exports.down = function (knex, Promise) {
  return knex.schema.dropTableIfExists('waterways')
}
