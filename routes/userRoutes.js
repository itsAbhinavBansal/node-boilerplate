const express = require('express');
const userController = require('../controllers/userController');
const auth = require('../middlewares/auth');
const router = express.Router();

router.post('/signup', userController.signup);
router.post('/login', userController.login);

router.get('/books', auth, userController.getBooks);
router.post('/book', auth, userController.createBook);
router.put('/book/:id', auth, userController.updateBook);
router.delete('/book/:id', auth, userController.deleteBook);

module.exports = router;
