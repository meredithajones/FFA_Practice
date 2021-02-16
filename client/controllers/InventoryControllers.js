const db = require("../models")


//Setting up methods for the Inventory controller
module.exports = {
findAll: function(req, res) {
    db.Inventory
    .find(req.query)
    .sort({ quantity: -1 })
    .then(dbModel => res.join (dbModel))
    .catch(err => res.status(422).json(err));
},

findById: function(req, params) {
    db.Inventory
    .find(req.params.id)
    .then(dbModel => res.join (dbModel))
    .catch(err => res.status(422).json(err));
},

create: function(req, res) {
    db.Inventory
    .create(req.body)
    .then(dbModel => res.join (dbModel))
},

update: function(req, res) {
    db.Inventory
    .findOneandUpdate({ _id: req.params.id }, req.body)
    .then(dbModel => res.json(dbModel))
    .catch(err => res.status(422).json(err));
},

remove: function(req, res) {
    db.Inventory
    .find(req.params.id)
    .then(dbModel => dbModel.remove())
    .then(dbModel => res.json(dbModel))
    .catch(err => res.status(422).json(err));
}

}