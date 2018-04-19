
exports.up = function (knex, Promise) {
  return knex.schema.creatTableIfNotExists('collectionPoints', (table) => {
    table.increments('id').primary()
    table.integer('streamId').notNullable()
    table.integer('farmerId').notNullable()
    table.string('coordinates').notNullable()
  })
}

exports.down = function (knex, Promise) {
  return knex.schema.dropTableIfExists('collectionPoints')
}
