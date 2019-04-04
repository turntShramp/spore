module.exports = {
  "development": {
    "username": process.env.dev_USERNAME,
    "password": process.env.dev_PASSWORD,
    "database": process.env.dev_DATABASE,
    "host": "127.0.0.1",
    "dialect": "mysql"
  },
  "test": {
    "username": "root",
    "password": null,
    "database": "database_test",
    "host": "127.0.0.1",
    "dialect": "mysql"
  },
  "production": {
    "username": process.env.prod_USERNAME,
    "password": process.env.prod_PASSWORD,
    "database": process.env.prod_DATABASE,
    "host": process.env.prod_HOST,
    "dialect": "mysql"
  }
}
