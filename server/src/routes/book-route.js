const express = require('express');
const router = express.Router();
const controller = require('../controllers/book-controller');

router.get('/', controller.get);
router.post('/favorite', controller.updateFavoriteBook);
router.get('/favorites', controller.getFavoriteBooks);

module.exports = router;