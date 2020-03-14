/**
 * Tours.js
 *
 * @description :: A model definition represents a database table/collection.
 * @docs        :: https://sailsjs.com/docs/concepts/models-and-orm/models
 */

module.exports = {

  attributes: {
    english: {
      autoMigrations: {
        index: true
      },
      model: 'ToursEn',
    },
    romanian: {
      autoMigrations: {
        index: true
      },
      model: 'ToursRo',
    },
    ukrainian: {
      autoMigrations: {
        index: true
      },
      model: 'ToursUa',
    }
  },
  datastore: 'mysql_connection',
};