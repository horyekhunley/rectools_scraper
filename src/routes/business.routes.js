const express = require('express');
const router = express.Router();
const { createBusiness, getAllBusinesses } = require('../controllers/business.controllers')

router.post('/', createBusiness);
router.get('/', getAllBusinesses);

module.exports = router;
