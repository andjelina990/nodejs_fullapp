const mongojs = require('mongojs');
const db = mongojs('fullapp', ['termins']);

const newTerminController = (req, res) => {
  let user = req.session.user;
  db.termins.insert(
    {
      client_name: req.body.client_name,
      lastname_client: req.body.lastname_client,
      age_client: req.body.age_client,
      name_spouse: req.body.name_spouse,
      lastname_spouse: req.body.lastname_spouse,
      age_spouse: req.body.age_spouse,
      fix_phone: req.body.fix_phone,
      mobile_phone: req.body.mobile_phone,
      adress: req.body.adress,
      date_termin: req.body.date_termin,
      time_termin: req.body.time_termin,
      advisor: req.body.advisor,
      city: req.body.city,
      kids: req.body.kids,
      operacions: req.body.operacions,
      therapy: req.body.therapy,
      remark: req.body.remark,
      active: true,
      value_contract: 0,
      reason: '',
      entry: false,
      product: '',
      operator: user.first_name + ' ' + user.last_name,
    },
    (err, docs) => {
      res.redirect('/operator');
    },
  );
};

module.exports = newTerminController;
