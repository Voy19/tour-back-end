   /**
    * Images.js
    *
    * @description :: A model definition represents a database table/collection.
    * @docs        :: https://sailsjs.com/docs/concepts/models-and-orm/models
    */

module.exports = {
   attributes: {
         image_uid: {
            type: 'string'
         },
         tourId: {
            autoMigrations: {
               index: true
            },
            model: 'Tours',
         },
   },
   datastore: 'mysql_connection',
};