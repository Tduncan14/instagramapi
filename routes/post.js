const express = require('express');
const router = express.Router();
const postController = require('../controllers/postController');
const {hasName} = require('../validator/validators');


router.get('/',postController.index);
router.post('/',hasName,postController.store);

console;

module.exports = router;