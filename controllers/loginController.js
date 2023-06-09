const mongojs = require('mongojs');
const db = mongojs('fullapp', ['users']);

const loginController = (req, res) => {
  // take data req.body
  let nameIzForme = req.body.name;
  let passIzForme = req.body.password;

  db.users.find(
    { first_name: nameIzForme, password: passIzForme },
    (err, docs) => {
      if (err) {
        console.log('error');
        res.redirect('/');
      } else {
        if (docs.length === 1) {
          // found user
          let user = docs[0];
          req.session.user = user;
          if (user.role == 'admin') {
            res.redirect('/admin');
          } else if (user.role == 'operator') {
            res.redirect('/operator');
          } else if (user.role == 'advisor') {
            res.redirect('/advisor');
          } else {
            res.redirect('/');
          }
        } else {
          // data are not correct
          res.redirect('/');
        }
      }
    },
  );
};

module.exports = loginController;
