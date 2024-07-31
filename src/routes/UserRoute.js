const express = require('express');
const { CreateUser } = require('../controller/UserController');
const router = express.Router();


router.post("/register",CreateUser)

module.exports = router;