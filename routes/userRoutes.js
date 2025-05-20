const express = require('express');
const userController = require('../controllers/userController');
const router = express.Router();

router.get('/users', userController.getUsers);
router.post('/user', userController.createUser);
router.put('/user/:id', userController.updateUser);
router.delete('/user/:id', userController.deleteUser);

module.exports = router;
