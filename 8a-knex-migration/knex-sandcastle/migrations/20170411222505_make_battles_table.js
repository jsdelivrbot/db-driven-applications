
exports.up = function(knex, Promise) {
  return knex.schema
  .createTable('battles', function(table) {
    table.increments();
    table.string('battle_location').notNullable();
    table.foreign('id').references('hero.id');
      //below does nto work it cannot find monster_id
      //https://github.com/tgriesser/knex/issues/245
    // table.foreign('id',3).unsigned().references('monsters.monster_id').inTable('monster_id');


  })
};

exports.down = function(knex, Promise) {
  return knex.schema.dropTable('battles');

};
