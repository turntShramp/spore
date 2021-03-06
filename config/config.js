require('dotenv').config();

module.exports = {
  "development": {
    "username": process.env.dev_USERNAME,
    "password": process.env.dev_PASSWORD,
    "database": process.env.dev_DATABASE,
    "host": process.env.dev_HOST,
    "dialect": "mysql",
  },
  "test": {
    "username": "root",
    "password": "root",
    "database": "spore_devdb",
    "host": "127.0.0.1",
    "dialect": "mysql",
  },
  "production": {
    "username": process.env.prod_USERNAME,
    "password": process.env.prod_PASSWORD,
    "database": process.env.prod_DATABASE,
    "host": process.env.prod_HOST,
    "dialect": "mysql",
  }
}