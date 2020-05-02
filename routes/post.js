const express = require('express');
const router = express.Router();
const postController = require('../controllers/postController');
const {hasDescription} = require('../validator/validators');
const uploadImage = require("../middleware/multer");


router.get('/',postController.index);


router.get('/:id', postController.show)


router.post('/',uploadImage("posts").single("image"),hasDescription,postController.store);

console;


router.put("/:id",hasDescription,postController.update)



router.delete("/:id", postController.delete)

module.exports = router;

