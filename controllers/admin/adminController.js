const mongojs = require('mongojs');
const db = mongojs('fullapp', ['users', 'city', 'products']);

const adminController = (req, res) => {
  let user = req.session.user;
  console.log(user);
  db.users.find({}, (err, users) => {
    db.products.find({}, (err, products) => {
      db.city.find({}, (err, city) => {
        let operateri = users.filter((user) => user.role == 'operater');
        let savetnici = users.filter((user) => user.role == 'savetnik');

        res.render('admin/adminDashboard', {
          name: user.first_name,
          products: products,
          operators: operateri,
          advisors: savetnici,
          city: city,
        });
      });
    });
  });
};

module.exports = adminController;
