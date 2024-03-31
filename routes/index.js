const express = require("express");
const router = express.Router();
const homeController = require("../controller/home_controller");
// getting honme page controller

router.get("/", homeController.home);
router.post("/add-habit", homeController.createHabit);
router.get("/favorite-habit", homeController.favoriteHabit);
router.get("/delete-habit", homeController.destroyHabit);
router.get("/status-update", homeController.statusUpdate);
module.exports = router;
