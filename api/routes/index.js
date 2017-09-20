const express = require('express');
const router = express.Router();
const helloController = require('../controllers/hello');

//We do not have to add /api because we have already done that in app.js line 31

router.get('/', helloController.index);






module.exports = router;