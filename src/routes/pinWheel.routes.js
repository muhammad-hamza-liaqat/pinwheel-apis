const express = require("express");
const { verificationPinWheelIncome } = require("../controller/pinWheel.controller");
const pinWheelRoutes = express.Router();

pinWheelRoutes.post("/verification", verificationPinWheelIncome);

module.exports = pinWheelRoutes