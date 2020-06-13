/**
 * ImagesController
 *
 * @description :: Server-side actions for handling incoming requests.
 * @help        :: See https://sailsjs.com/docs/concepts/actions
 */

const passport = require("passport");
const cloudinary = require('cloudinary').v2;
const path = require('path');
const config = require(path.resolve(sails.config.appPath, './config.json')).cloudinarySettings;   

cloudinary.config({ 
   cloud_name: config.cloud_name, 
   api_key: config.api_key, 
   api_secret: config.api_secret 
});

module.exports = {
   upload: function (req, res) {
      // passport.authenticate("jwt", (err, user, info) => {
      //    if (err) return res.status(400).send(err);
      //    if (info !== undefined) return res.status(400).send({ token: info.message });

         req.file('file').upload({
                  dirname: require('path').resolve(sails.config.appPath, '.tmp/public/images'),
                  maxBytes: 10000000
            }, (err, uploadedFile) => {
                  if (err) {
                     return res.serverError(err);
                  }

                  const img = require('path').resolve(sails.config.appPath, `.tmp/public/images/${uploadedFile[0].fd.replace(/^.*[\\\/]/, '')}`);

                  cloudinary.uploader.upload(img, {
                     public_id: '', 
                     use_filename: true, 
                     discard_original_filename: true, 
                     folder: 'tour_images'
                  }).then((result) => {
                     Images.create({
                        tourId: req.body.tourId,
                        image_uid: result.url,
                     }).exec((err, image) => {
                           res.status(200).send({
                              message: "success",
                              result,
                           });
                        });
                     }).catch((error) => {
                        res.status(500).send({
                           message: "failure",
                           error,
                        });
                  });
         })
   },

   getUserAvatar: (req, res) => {
      passport.authenticate("jwt", (err, user, info) => {
      if (err) return res.status(400).send(err);
      if (info !== undefined) return res.status(400).send({ token: info.message });

         Images.findOne({
               userId: req.params.userId
         }).then(image => res.send(image)).catch(err => res.send(err))
      })(req, res)
   }
}