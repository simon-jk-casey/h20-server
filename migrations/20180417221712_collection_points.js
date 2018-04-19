
exports.up = function (knex, Promise) {
  knex.schema.hasTable('collectionPoints').then((exists) => {
    if (!exists) {
      return knex.schema.createTable('collectionPoints', (t) => {
        t.increments('id').unsigned().primary()
        t.integer('streamId').notNullable()
        t.integer('farmerId').notNullable()
        t.string('coordinates')
        // leave nullable until coord acquire figured
      })
    }
  })
}

exports.down = function (knex, Promise) {
  return knex.schema.dropTableIfExists('collectionPoints')
}
