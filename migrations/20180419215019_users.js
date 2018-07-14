
exports.up = function (knex, Promise) {
  return knex.schema.hasTable('users').then((exists) => {
    if (!exists) {
      return knex.schema.createTable('users', (t) => {
        t.increments('id').unsigned().primary()
        t.string('name').notNullable()
        t.string('password').notNullable()
        t.string('address').notNullable()
        t.string('phoneNum').notNullable()
        t.string('email').notNullable().unique()
        t.boolean('admin').notNullable()
      })
    }
  })
}

exports.down = function (knex, Promise) {
  return knex.schema.dropTableIfExists('users')
}
