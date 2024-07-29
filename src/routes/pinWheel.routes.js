const express = require("express");
const { verificationPinWheel } = require("../controller/pinWheel.controller");
const pinWheelRoutes = express.Router();

pinWheelRoutes.post("/verification", verificationPinWheel);

module.exports = pinWheelRoutes