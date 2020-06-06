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
        // allowNull: true,
        index: true
      },
      model: 'ToursEn',
    },
    romanian: {
      // allowNull: true,
      autoMigrations: {
        index: true
      },
      model: 'ToursRo',
    },
    ukrainian: {
      // allowNull: true,
      autoMigrations: {
        index: true
      },
      model: 'ToursUa',
    },
    imageId: {
      autoMigrations: {
        index: true
      },
      model: 'Images',
    },
    isSelected: {
      allowNull: false,
      type: 'boolean',
      defaultsTo: false
    }
  },
  datastore: 'mysql_connection',
};