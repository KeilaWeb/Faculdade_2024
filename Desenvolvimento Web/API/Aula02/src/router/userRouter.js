const express = require("express");
const router = express.Router();
const userController = require('../controller/userController.js');

router.get("/user", userController.getAllUser);
router.post("/user", userController.createUser);

module.exports = router;