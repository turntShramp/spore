module.exports = {
  "development": {
    "username": process.env.dev_USERNAME,
    "password": process.env.dev_PASSWORD,
    "database": process.env.dev_DATABASE,
    "host": "127.0.0.1",
    "dialect": process.env.dev_DIALECT
  },
  "test": {
    "username": "root",
    "password": null,
    "database": "database_test",
    "host": "127.0.0.1",
    "dialect": "mysql"
  },
  "production": {
    "username": "root",
    "password": null,
    "database": "database_production",
    "host": "127.0.0.1",
    "dialect": "mysql"
  }
}
