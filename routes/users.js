const express = require('express');
const router = express.Router();
const  usersController = require('../controllers/user')
router.route('/')
    .get(usersController.index)
    .post();

module.exports = router;
