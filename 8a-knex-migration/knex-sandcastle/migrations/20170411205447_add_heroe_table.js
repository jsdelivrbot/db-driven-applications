
exports.up = function(knex, Promise) {
  return knex.schema
    .createTable('heroes', function(table){
      table.increments('heroe_id').primary();
      table.string('hero_name').notNullable();
      table.string('hero_style').notNullable();
});
}
exports.down = function(knex, Promise) {
  return knex.schema
    .dropTable('heroes');

};
