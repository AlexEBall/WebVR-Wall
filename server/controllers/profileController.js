const db = require("../models");

module.exports = {

    findAll: function(req, res) {
        console.log("Req: ", req.query);
        db.Profile 
            .find({})
            .sort({ date: -1 })
            .then(dbModel => res.json(dbModel))
            .catch(err => res.status(422).json(err));

    },
    findById: function(req, res) {
        db.Profile
            .findById(req.params.id)
            .then(dbModel => res.json(dbModel))
            .catch(err => res.status(422).json(err));
    },

    create: function (req, res) {
        db.Profile
            .create(req.body)
            .then(dbModel => res.json(dbModel))
            .catch(err => res.status(422).json(err));
    }
}



