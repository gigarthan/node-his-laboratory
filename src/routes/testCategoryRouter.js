const express = require('express');
const router = express.Router();

const testCategoryController = require('../controllers/testCategoryController');

router.get('/', testCategoryController.getAllTestCategory);

router.post('/addTestCategory', testCategoryController.addTestCategory);

router.put('/updateTestCategory', testCategoryController.addTestCategory);

module.exports = router;
