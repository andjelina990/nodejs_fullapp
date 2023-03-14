const express = require('express');
const router = express.Router();
router.use(checkAdmin);

router.get('/', require('../controllers/admin/adminController'));

router.get('/create', (req, res) => {
  res.render('admin/adminCreateForm');
});

router.get('/create/city', (req, res) => {
  res.render('admin/createCity');
});

router.get('/create/products', (req, res) => {
  res.render('admin/createproduct');
});

router.get(
  '/delete/user/:userId',
  require('../controllers/admin/deleteUserController'),
);
router.get(
  '/delete/product/:productId',
  require('../controllers/admin/deleteProductController'),
);

router.get(
  '/delete/city/:cityId',
  require('../controllers/admin/deleteCityController'),
);

router.post('/create/save', require('../controllers/admin/saveControllers'));

router.post('/create/city/save', require('../controllers/admin/createCity.js'));

router.post(
  '/create/products/save',
  require('../controllers/admin/createProduct.js'),
);
router.get(
  '/advisor/termins/:name',
  require('../controllers/admin/advisorTerminsController.js'),
);

function checkAdmin(req, res, next) {
  let user = req.session.user;
  if (user) {
    if (user.role == 'admin') {
      next();
    } else {
      res.redirect('/');
    }
  } else {
    res.redirect('/');
  }
}

module.exports = router;
