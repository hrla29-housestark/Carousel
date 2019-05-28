const Adidas = require('../database/index.js');

const controller = {
  get: (req, res) => {
    Adidas.find({})
      .then(data => res.status(200).send(data))
      .catch(err => res.status(404).send(err));
  },
  getOne: (req, res) => {
    const { productID } = req.params;
    Adidas.findOne({ productID })
      .then(data => res.status(200).send(data))
      .catch(err => res.status(404).send(err));
  }
};

module.exports = controller;
