const express = require('express');
const router = express.Router();
const postController = require('../controllers/postController');
const {hasDescription} = require('../validator/validators');
const uploadImage = require("../middleware/multer");


router.get('/',postController.index);
router.post('/',uploadImage("posts").single("image"),hasDescription,postController.store);

console;

module.exports = router;