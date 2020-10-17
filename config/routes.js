/**
 * Route Mappings
 * (sails.config.routes)
 *
 * Your routes tell Sails what to do each time it receives a request.
 *
 * For more information on configuring custom routes, check out:
 * https://sailsjs.com/anatomy/config/routes-js
 */

module.exports.routes = {

  /***************************************************************************
   *                                                                          *
   * Make the view located at `views/homepage.ejs` your home page.            *
   *                                                                          *
   * (Alternatively, remove this and add an `index.html` file in your         *
   * `assets` directory)                                                      *
   *                                                                          *
   ***************************************************************************/

  '/': {
    view: 'assets/index.html'
  },
  'POST /api/login': 'AuthController.login',
  'GET /api/logout': 'AuthController.logout',
  'POST /api/registration': 'RegistrationController.registration',
  'GET /api/tours': 'ToursController.allTours',
  "POST /api/upload": "ImagesController.upload",
  'GET /api/hot-tours': 'ToursController.hotTours',
  'DELETE /api/delete-tour/:tourId': 'ToursController.deleteTour',
  'PUT /api/add-to-hot-tour/:tourId': 'ToursController.addToHotTour',
  'PUT /api/delete-from-hot-tour/:tourId ': 'ToursController.deleteFromHotTour',
  'POST /api/create-tour': 'ToursController.createTour',
  'POST /api/create-feedback': 'FeedbackController.createFeedback',
  'DELETE /api/delete-feedback/:feedbackId': 'FeedbackController.deleteFeedback',
  'GET /api/feedbacks': 'FeedbackController.getFeedbacks',
  'GET /api/validityJwt': 'AuthController.validityJwt',
  '/*': {
    view: 'assets/index.html'
  },


  /***************************************************************************
   *                                                                          *
   * More custom routes here...                                               *
   * (See https://sailsjs.com/config/routes for examples.)                    *
   *                                                                          *
   * If a request to a URL doesn't match any of the routes in this file, it   *
   * is matched against "shadow routes" (e.g. blueprint routes).  If it does  *
   * not match any of those, it is matched against static assets.             *
   *                                                                          *
   ***************************************************************************/


};