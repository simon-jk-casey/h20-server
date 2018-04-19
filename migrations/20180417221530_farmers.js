
exports.up = function (knex, Promise) {
  return knex.schema.hasTable('farmers').then((exists) => {
    if (!exists) {
      return knex.schema.createTable('farmers', (t) => {
        t.increments('id').unsigned().primary()
        t.string('name').notNullable()
        t.string('password').notNullable()
        t.string('address').notNullable()
        t.string('phoneNum').notNullable().unique()
      })
    }
  })
}

exports.down = function (knex, Promise) {
  return knex.schema.dropTableIfExists('users')
}
