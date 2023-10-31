const express = require("express");
const router = express.Router();
const homeController = require("../controller/home_controller");
// getting honme page controller

router.get("/", homeController.home);

module.exports = router;
