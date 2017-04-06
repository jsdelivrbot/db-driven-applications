
exports.up = function(knex, Promise) {
  return knex.schema
  .createTable('heroes', (table) => {
    table.increments('hero_id').primary();
    table.string('heroe_name').notNullable();

  })
};

exports.down = function(knex, Promise) {
  return knex.schema
  .dropTable('heroes');
};
