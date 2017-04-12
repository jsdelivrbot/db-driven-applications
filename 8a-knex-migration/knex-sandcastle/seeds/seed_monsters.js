
exports.seed = function(knex, Promise) {
  // Deletes ALL existing entries
  return knex('monsters').del()
    .then(function () {
      // Inserts seed entries
      return knex('monsters').insert([
        {monster_id: 1, monster_type: 'beast', monster_name: 'bob'},
        {monster_id: 2, monster_type: 'robot', monster_name: 'steve'},
        {monster_id: 3, monster_type: 'human', monster_name: 'thomas'}
      ]);
    });
};
