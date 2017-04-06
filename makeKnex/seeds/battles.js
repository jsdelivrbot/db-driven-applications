
exports.seed = function(knex, Promise) {
  // Deletes ALL existing entries
  return knex('battles').del()
    .then(function () {
      // Inserts seed entries
      return knex('battles').insert([
        {location: 'Kings Landing', monster_id: 11, hero_id: 3},
        {location: 'Winterfell', monster_id: 12, hero_id: 4},
        {location: 'Hoth', monster_id: 3, hero_id: 4}
      ]);
    });
};
