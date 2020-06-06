/**
 * ImagesController
 *
 * @description :: Server-side actions for handling incoming requests.
 * @help        :: See https://sailsjs.com/docs/concepts/actions
 */

const passport = require("passport");
const path = require("path");

module.exports = {
   upload: function (req, res) {
      // passport.authenticate("jwt", (err, user, info) => {
      //    if (err) return res.status(400).send(err);
      //    if (info !== undefined) return res.status(400).send({ token: info.message });
      // console.log(req.body.tourId);      

         req.file('file').upload({
               dirname: require('path').resolve(sails.config.appPath, 'assets/images'),
               saveAs: (__newFileStream, cb) => {
                  cb(null, `tour_${req.body.tourId}` + path.extname(__newFileStream.filename).toLowerCase());
               },
               maxBytes: 10000000
         }, (err, uploadedFile) => {
               if (err) {
                  return res.serverError(err);
               }

               if (uploadedFile.length === 0) {
                  return res.serverError("No files were uploaded!");
               }
               
               let fileUID = uploadedFile[0].fd.replace(/^.*[\\\/]/, '');

               Images.findOrCreate({
                  tourId: req.body.tourId,
               }, {
                  image_uid: fileUID,
                  tourId: req.body.tourId
               }).exec((err, image, wasCreated) => {
                  if (err) return res.send(err);
                  if (!wasCreated) {
                     Images.update({
                           tourId: req.body.tourId
                     }, {
                           image_uid: fileUID
                     }).exec((err) => {
                           if (err) {
                              return res.status(400).send(err);
                           }
                           res.send({
                              file: uploadedFile[0]
                           });
                     })
                  } else {
                     res.send({
                           file: uploadedFile[0]
                     });
                  }
               })
         });
      // })(req, res)
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