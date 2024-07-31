const express = require('express');
const { GenerateToken } = require('../controller/AuthController');
const router = express.Router();


router.post("/getauthtoken",GenerateToken)

module.exports = router;