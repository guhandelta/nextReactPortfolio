const express = require("express");

const router = express.Router();

const bookControllers = require('../controllers/book');

router.post('', bookControllers.saveBooks );

router.get('', bookControllers.getBooks );

router.patch('/:id', bookControllers.updateBooks );

router.delete('/:id', bookControllers.deleteBooks );

module.exports = router;