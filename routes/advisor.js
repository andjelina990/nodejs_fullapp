const express = require('express');
const router = express.Router();

router.use(checkAdvisor);

router.get('/', require('../controllers/advisor/advisorController'));

router.get(
  '/termin/:id',
  require('../controllers/advisor/showTerminController'),
);

router.post('/report/:id', require('../controllers/advisor/reportController'));

function checkAdvisor(req, res, next) {
  let user = req.session.user;
  if (user) {
    if (user.role == 'advisor') {
      next();
    } else {
      res.redirect('/');
    }
  } else {
    res.redirect('/');
  }
}

module.exports = router;
