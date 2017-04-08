
exports.up = function(knex, Promise) {
  return knex.schema.createTable('weapons', function(table) {
    table.string('weapon_name')
    table.foreign('hero_who_uses').references('heroes.heroe_name')
  })
};

exports.down = function(knex, Promise) {
  return knex.schema.dropTable('weapons');

};


// foreign — table.foreign(columns)
// Adds a foreign key constraint to a table for an existing
// column using table.foreign(column).references(column) or multiple
// columns using table.foreign(columns).references(columns). You can also chain
// onDelete and/or onUpdate to set the reference option (RESTRICT, CASCADE, SET NULL,
//  NO ACTION) for the operation. Note, this is the same as column.references(column)
//   but works for existing columns.

// knex.schema.table('users', function (table) {
//   table.integer('user_id').unsigned()
//   table.foreign('user_id').references('Items.user_id_in_items')
// })
// dropForeign — table.dropForeign(columns, [foreignKeyName])
