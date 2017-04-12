
exports.seed = function(knex, Promise) {
  // Deletes ALL existing entries
  return knex('hero').del()
    .then(function () {
      // Inserts seed entries
      return knex('hero').insert([
        {id: 1, hero_name: 'paul'},
        {id: 2, hero_name: 'peter'},
        {id: 3, hero_name: 'mary'}
      ]);
    });
};
