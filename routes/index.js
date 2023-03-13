const express = require('express');
const router = express.Router();

router.use('/', require('./home'));
router.use('/login', require('../controllers/loginController.js'));

router.use('/admin', require('./admin'));
router.use('/logout', require('./logout'));

router.use('/operator', require('./operator'));

router.use('/advisor', require('./advisor'));

module.exports = router;
