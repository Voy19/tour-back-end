/**
 * FeedbackController
 *
 * @description :: Server-side actions for handling incoming requests.
 * @help        :: See https://sailsjs.com/docs/concepts/actions
 */

module.exports = {
  createFeedback: (req, res) => {
    Feedback.create({
      email: req.body.email,
      name: req.body.name,
      description: req.body.description,
    }).then(() => res.send('Feedback successfully created'))
    .catch((err) => res.status(400).send(err))
  },

  deleteFeedback: (req, res) => {
    Feedback.destroyOne({
      id: req.params.feedbackId,
    }).then(() => res.send('Feedback successfully deleted'))
    .catch((err) => res.status(400).send(err))
  },

  getFeedbacks: (req, res) => {
    Feedback.find().then((result) => res.send(result))
    .catch((err) => res.status(400).send(err))
  }
};