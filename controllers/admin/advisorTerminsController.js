const mongojs = require('mongojs');
const db = mongojs('fullapp', ['termins']);

const advisorTerminsController = (req, res) => {
  let name = req.params.name;
  let user = req.session.user;

  console.log(name);

  db.termins.find({ advisor: name }, (err, termins) => {
    console.log(termins);
    res.render('admin/advisorTermins', {
      name: name,
      termins: termins,
    });
  });
};

module.exports = advisorTerminsController;
