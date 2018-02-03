const db = require("../models");

// controller database query methods for the profileController
module.exports = {
<<<<<<< HEAD
    findAll: function(req, res) {
        db.Test
            .find(req.query)
            .sort({ date: -1 })
            .then(dbModel => res.json(dbModel))
            .catch(err => res.status(422).json(err));
    },
    findById: function(req, res) {
        db.Test
            .findById(req.params.id)
            .then(dbModel => res.json(dbModel))
            .catch(err => res.status(422).json(err));
    }
=======
  findAll: function(req, res) {
    db.Test
      .find(req.query)
      .sort({ date: -1 })
      .then(dbModel => res.json(dbModel))
      .catch(err => res.status(422).json(err));
  },
  findById: function(req, res) {
    db.Test
      .findById(req.params.id)
      .then(dbModel => res.json(dbModel))
      .catch(err => res.status(422).json(err));
  }
>>>>>>> 5e264f32603a12e0e631b7666828c9a8e67a9dfd
}