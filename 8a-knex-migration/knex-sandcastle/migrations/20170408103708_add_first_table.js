
exports.up = function(knex, Promise) {
  return knex.schema
  .createTable('monsters', function(table){
    table.increments('monster_id')
    table.string('monster_name').notNullable();
    table.string('monster_type').notNullable();
  })
};

exports.down = function(knex, Promise) {

};
