
exports.up = function(knex, Promise) {
  return knex.schema
  .createTable('heroes', function(table){
    table.increments('hero_id');
    table.string('hero_name').notNullable();
    table.string('hero_weapon').notNullable();
  })
};

exports.down = function(knex, Promise) {
  return knex.schema.dropTable('heroes');

};
