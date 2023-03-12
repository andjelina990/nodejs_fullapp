const mongojs = require('mongojs');
const db = mongojs('fullapp', ['users']);

const saveController = (req, res) => {
  let firstName = req.body.first_name;
  let lastName = req.body.last_name;
  let password = req.body.password;
  let role = req.body.role;

  db.users.insert(
    {
      first_name: firstName,
      last_name: lastName,
      password: password,
      role: role,
    },
    (err, docs) => {
      if (err) {
      } else {
        res.redirect('/admin');
      }
    },
  );
};

module.exports = saveController;
