const express = require('express');
const router = express.Router()
const {isEamil,hasPassword,hasName} = require('../validator/validators');
const authController = require("../controllers/authController");


router.post("/login", authController.login)



module.exports = router;