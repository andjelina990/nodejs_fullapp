const mongojs = require('mongojs');
const db = mongojs('fullapp', ['users', 'city', 'products']);

const operatorController = (req, res) => {
  let user = req.session.user;

  db.city.find({}, (err, city) => {
    db.users.find({ role: 'advisor' }, (err, advisors) => {
      db.termins.find(
        { operator: user.first_name + ' ' + user.last_name },
        (err, termins) => {
          res.render('operator/index', {
            name: user.first_name,
            advisors: advisors,
            city: city,
            numberOfTermins: termins.length,
          });
        },
      );
    });
  });
};

module.exports = operatorController;
