const { bookshelf } = require('./bookshelf.js');


const Battle = require('./models/battles')
const Monster = require('./models/monsters')

const monster = new Monster();
//how to add properties to database
// monster.set('monster_name', 'Sully');
console.log("mosters", monster)

//saves to database with property .save
// monster.save().then(function(m) {
//   console.log("monster saved", m.get('monster_name'))
// })

Monster.forge({ monster_name: "Joel"}).fetch({withRelated: ['battles']}).then( function(monster) {
  console.log('Got Monster:', monster.get('monster_name'), monster.get('monster_id'));
  console.log('Got Battles', monster.related('battles').toJson());
})




// DOES NOT WORK
// Battle.byLocation('Rhodes').then(function (battle){
//   console.log('Got battle', battle.get('monster_id'), battle.get('hero_id'))
// })

process.exit;
