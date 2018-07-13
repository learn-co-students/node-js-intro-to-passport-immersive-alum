// Update with your config settings.

module.exports = {
  testing: {
    client: "pg",
    connection: {
      database: "learnco_blog_test"
    },
    pool: {
      min: 2,
      max: 10
    },
    migrations: {
      tableName: "knex_migrations"
    }
  },

  development: {
    client: "pg",
    connection: {
      database: "learnco_blog"
    },
    pool: {
      min: 2,
      max: 10
    },
    migrations: {
      tableName: "knex_migrations"
    }
  }
};
