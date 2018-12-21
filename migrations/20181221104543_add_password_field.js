
exports.up = function(knex, Promise) {
  return knex.schema.table('users', (table) => {
    table.string('password', 128)
  })
};

exports.down = function(knex, Promise) {
  return knex.schema.table('users', table => {
    table.dropColumn('password')
  })
};
