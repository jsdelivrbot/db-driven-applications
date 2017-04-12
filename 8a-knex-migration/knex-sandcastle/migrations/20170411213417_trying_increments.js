
exports.up = function(knex, Promise) {
  return knex.schema
  .createTable('guns', function(table) {
    table.increments();
    table.string('guns_name').notNullable();
  })
};

exports.down = function(knex, Promise) {
  return knex.schema.dropTable('guns')

};
