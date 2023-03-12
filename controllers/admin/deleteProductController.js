const mongojs = require('mongojs');
const db = mongojs('fullapp', ['products']);

const deleteProizvodController = (req, res) => {
  let productId = req.params.productId;

  db.products.remove({ _id: mongojs.ObjectID(productId) }, (err, docs) => {
    res.send('Ok');
  });
};

module.exports = deleteProizvodController;
