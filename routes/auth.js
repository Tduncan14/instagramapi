const express = require('express');
const router = express.Router()
const {isEmail,hasPassword,hasName} = require('../validator/validators');
const authController = require('../controllers/auth');

router.post("/login", authController.login);


router.post('/signup',isEmail,hasPassword,hasName,authController.signup)


router.get('/me',authController.me);



module.exports = router;