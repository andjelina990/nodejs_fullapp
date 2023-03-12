const mongojs = require('mongojs');
const db = mongojs('fullapp', ['users', 'city', 'products']);

const createProduct = (req, res) => {
  let name = req.body.name;
  let price = req.body.price;

  db.products.insert(
    {
      name: name,
      price: price,
    },
    (err, docs) => {
      res.redirect('/admin');
    },
  );
};

module.exports = createProduct;
