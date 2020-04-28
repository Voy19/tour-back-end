/**
 * ToursController
 *
 * @description :: Server-side actions for handling incoming requests.
 * @help        :: See https://sailsjs.com/docs/concepts/actions
 */

const passport = require('passport');

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
      // passport.authenticate('jwt', (err, user, info) => {
      //    if (err) return res.status(400).send(err);
      //    if (info !== undefined) return res.status(400).send({
      //       token: info.message
      //    });

         Tours.create({
            english: 1,
            romanian: 1,
            ukrainian: 1
         }).fetch().exec((err, tour) => {
            if (err) {
               return res.status(400).send(err);
            }

            Tours.update({
               id: tour.id
            }, {
               english: tour.id,
               romanian: tour.id,
               ukrainian: tour.id
            }).exec((err) => {
               if (err) {
                  return res.status(400).send(err);
               }

               ToursEn.create({
                  type: req.body.englishType,
                  country: req.body.englishCountry,
                  resort: req.body.englishResort,
                  departureFrom: req.body.englishDepartureFrom,
                  departureDate: req.body.departureDate,
                  hotel: req.body.englishHotel,
                  nights: req.body.nights,
                  food: req.body.englishFood,
                  insurance: req.body.englishInsurance,
                  price: req.body.price
               }).exec(err => {
                  if (err) {
                     return res.status(400).send(err);
                  }

                  ToursUa.create({
                     type: req.body.ukrainianType,
                     country: req.body.ukrainianCountry,
                     resort: req.body.ukrainianResort,
                     departureFrom: req.body.ukrainianDepartureFrom,
                     departureDate: req.body.departureDate,
                     hotel: req.body.ukrainianHotel,
                     nights: req.body.nights,
                     food: req.body.ukrainianFood,
                     insurance: req.body.ukrainianInsurance,
                     price: req.body.price
                  }).exec(err => {
                     if (err) {
                        return res.status(400).send(err);
                     }

                     ToursRo.create({
                        type: req.body.romanianType,
                        country: req.body.romanianCountry,
                        resort: req.body.romanianResort,
                        departureFrom: req.body.romanianDepartureFrom,
                        departureDate: req.body.departureDate,
                        hotel: req.body.romanianHotel,
                        nights: req.body.nights,
                        food: req.body.romanianFood,
                        insurance: req.body.romanianInsurance,
                        price: req.body.price
                     }).exec(err => {
                        if (err) {
                           return res.status(400).send(err);
                        }

                        res.send('Tour successfully created');
                     })
                  })
               })
            })
         })
      // })(req, res)
   }
};