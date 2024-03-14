const express = require("express");
const router = express.Router();
const userController = require('../controller/userController.js');

router.get("/user", userController.getAllUser);

module.exports = router;