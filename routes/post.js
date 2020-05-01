const express = require('express');
const router = express.Router();
const postController = require('../controllers/postController');
const {hasDescription} = require('../validator/validators');


router.get('/',postController.index);
router.post('/',hasDescription,postController.store);

console;

module.exports = router;