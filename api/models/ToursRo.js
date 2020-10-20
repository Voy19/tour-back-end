/**
 * ToursRo.js
 *
 * @description :: A model definition represents a database table/collection.
 * @docs        :: https://sailsjs.com/docs/concepts/models-and-orm/models
 */

module.exports = {

  attributes: {
    type: {
      type: 'string',
      required: true,
      allowNull: false,
    },
    country: {
      type: 'string',
      required: true,
      allowNull: false
    },
    resort: {
      type: 'string',
      required: true,
      allowNull: false
    },
    departureFrom: {
      type: 'string',
      required: true,
      allowNull: false
    },
    departureDate: {
      type: 'ref',
      columnType: 'date',
      required: true,
      allowNull: false
    },
    hotel: {
      type: 'string',
      required: true,
      allowNull: false
    },
    nights: {
      type: 'string',
      required: true,
      allowNull: false
    },
    food: {
      type: 'string',
      required: true,
      allowNull: false
    },
    insurance: {
      type: 'string',
      required: true,
      allowNull: false
    },
    price: {
      type: 'string',
      required: true,
      allowNull: false
    },
  },
  datastore: 'mysql_connection',

};