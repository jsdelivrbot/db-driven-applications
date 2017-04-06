exports.up = function (knex, Promise) {
  return knex.schema
    .createTable('battles', (table) => {
      table.increments('battle_id').primary()
      table.string('location').notNullable()
      table.integer('hero_id').unsigned()
      table.foreign('hero_id').references('heroes')
      table.integer('monster_id').unsigned()
      table.foreign('monster_id').references('monsters')
    })
}

exports.down = function(knex, Promise) {
  return knex.schema
    .dropTable('battles')
};
