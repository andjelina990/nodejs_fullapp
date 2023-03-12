const express = require('express');
const router = express.Router();

router.use('/', require('./home'));
router.use('/login', require('../controllers/loginController.js'));

router.use('/admin', require('./admin'));
router.use('/logout', require('./logout'));

// router.use('/operater', require('./operater'));

// router.use('/savetnik', require('./savetnik'));

module.exports = router;
