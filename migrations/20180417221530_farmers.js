
exports.up = function (knex, Promise) {
  return knex.schema.createTableIfNotExists('farmers', (table) => {
    table.increments('id').primary()
    table.string('name').notNullable()
    table.string('password').notNullable()
    table.string('address').notNullable()
    table.string('phoneNum').unique()
  })
}

exports.down = function (knex, Promise) {
  return knex.schema.dropTableIfExists('users')
}
