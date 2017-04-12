
exports.up = function(knex, Promise) {
  return knex.schema
  .createTable('hero', function(table) {
    table.increments('hero_id');
    table.string('hero_name').notNullable();
  })
};

exports.down = function(knex, Promise) {
  return knex.schema.dropTable('hero')

};
