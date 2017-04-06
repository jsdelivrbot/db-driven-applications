// Update with your config settings.

module.exports = {

  development: {
    client: 'postgresql',
    connection: {
      database: 'in_class_knex_db'
    },
    pool: {
      min: 2,
      max: 10
    },
    migrations: {
      tableName: 'in_class_knex_db'
    }
  },


  staging: {
    client: 'postgresql',
    connection: {
      database: 'in_class_knex_db'
    },
    pool: {
      min: 2,
      max: 10
    },
    migrations: {
      tableName: 'in_class_knex_db'
    }
  },

  production: {
    client: 'postgresql',
    connection: {
      database: 'my_db'
    },
    pool: {
      min: 2,
      max: 10
    },
    migrations: {
      tableName: 'in_class_knex_db'
    }
  }

};
