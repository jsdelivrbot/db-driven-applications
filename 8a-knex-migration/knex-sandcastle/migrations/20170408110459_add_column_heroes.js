
exports.up = function(knex, Promise) {
  return knex.schema
  .table('heroes', function(table){
    table.string('how_many_marbles');
  })
};

exports.down = function(knex, Promise) {
  return knex.schema.dropTable('heroes');

};
