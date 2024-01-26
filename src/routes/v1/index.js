const express = require("express");
const { bookingController } = require("../../controllers");

const router = express.Router();

router.get("/booking", bookingController.info);

module.exports = router;
