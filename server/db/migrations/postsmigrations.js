exports.up = function (knex) {
  return knex.schema.createTable('post', (table) => {
    table.increments('id')
    table.string('post')
  })
}

exports.down = function (knex) {
  return knex.schema.dropTable('post')
}
