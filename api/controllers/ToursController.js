/**
 * ToursController
 *
 * @description :: Server-side actions for handling incoming requests.
 * @help        :: See https://sailsjs.com/docs/concepts/actions
 */

// const passport = require('passport');

module.exports = {
   allTours: (req, res) => {
      Tours.find().populate('english').populate('romanian').populate('ukrainian').exec((err, tours) => {
         if (err) {
            res.send(500, {
               err: err
            });
         }
         res.send(tours);
      })
   },

   createTour: (req, res) => {
      Tours.create().fetch().then(tour => res.send(tour));

      // res.send(tourId.id)
   }
};