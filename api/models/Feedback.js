/**
 * Feedback.js
 *
 * @description :: A model definition represents a database table/collection.
 * @docs        :: https://sailsjs.com/docs/concepts/models-and-orm/models
 */

module.exports = {

  attributes: {
    email: {
      type: 'string',
      required: true,
      allowNull: false,
      email: true,
    },
    name: {
      type: 'string',
      required: true,
      allowNull: false,
      regex: /^([a-zA-z])(?!\S*?[\(\)\{\}\/\\\[\],. а-яА-Я]).{2,}$/
    },
    description: {
      type: 'string',
      required: true,
      allowNull: false,
      maxLength: 1000,
    },
  },
  datastore: 'mysql_connection',
};