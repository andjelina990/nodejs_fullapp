const mongojs = require('mongojs');
const db = mongojs('fullapp', ['termins']);

const advisorController = (req, res) => {
  let user = req.session.user;

  db.termins.find(
    { advisor: user.first_name + ' ' + user.last_name, active: true },
    (err, termins) => {
      res.render('advisor/index', {
        name: user.first_name,
        termins: termins,
      });
    },
  );
};

module.exports = advisorController;
