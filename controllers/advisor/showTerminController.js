const mongojs = require('mongojs');
const db = mongojs('fullapp', ['termins']);

const showTerminController = (req, res) => {
  let user = req.session.user;
  let id = req.params.id;

  db.termins.find({ _id: mongojs.ObjectID(id) }, (err, termin) => {
    res.render('advisor/showTermin', {
      name: user.first_name,
      termin: termin[0],
    });
  });
};

module.exports = showTerminController;
