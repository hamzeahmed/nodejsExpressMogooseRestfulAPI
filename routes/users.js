const express = require('express');
const router = require('express-promise-router')();
const usersController = require('../controllers/user')
router.route('/')
    .get(usersController.index)
    .post(usersController.newUser);
router.route('/:userId')
    .get(usersController.getUser)
    .put(usersController.replaceUser)
    .patch(usersController.UpdateUser);
router.route('/:userId/cars')
    .get(usersController.getUserCars)
    .post(usersController.newUserCar)
module.exports = router;
