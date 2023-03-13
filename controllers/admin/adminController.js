const mongojs = require('mongojs');
const db = mongojs('fullapp', ['users', 'city', 'products']);

const adminController = (req, res) => {
  let user = req.session.user;
  // console.log(user);
  db.users.find({}, (err, users) => {
    db.products.find({}, (err, products) => {
      db.city.find({}, (err, city) => {
        let operators = users.filter((user) => user.role == 'operator');
        let advisors = users.filter((user) => user.role == 'advisor');

        res.render('admin/adminDashboard', {
          name: user.first_name,
          products: products,
          operators: operators,
          advisors: advisors,
          city: city,
        });
      });
    });
  });
};

module.exports = adminController;
