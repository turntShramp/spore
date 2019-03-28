const fs = require('fs');
require('dotenv');

module.exports = {
  development: {
    username: developement_USERNAME,
    password: developement_PASSWORD,
    database: developement_DATABASE,
    host: developement_HOST,
    dialect: developement_DIALECT
  },
  test: {
    username: test_USERNAME,
    password: test_PASSWORD,
    database: test_DATABASE,
    host: test_HOST,
    dialect: test_DIALECT
  },
  production: {
    username: process.env.production_USERNAME,
    password: process.env.production_PASSWORD,
    database: process.env.production_DATABASE,
    host: process.env.production_HOST,
    dialect: production_DIALECT
  }
};