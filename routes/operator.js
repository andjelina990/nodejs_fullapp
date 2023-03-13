const express = require('express');
const router = express.Router();

router.use(checkOperater);

router.get('/', require('../controllers/operator/operatorController'));

router.post(
  '/newTermin',
  require('../controllers/operator/newTerminController'),
);

function checkOperater(req, res, next) {
  let user = req.session.user;
  if (user) {
    if (user.role == 'operator') {
      next();
    } else {
      res.redirect('/');
    }
  } else {
    res.redirect('/');
  }
}

module.exports = router;
