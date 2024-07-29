const express = require("express");
const { verificationPinWheelIncome, createUser } = require("../controller/pinWheel.controller");
const pinWheelRoutes = express.Router();

pinWheelRoutes.get("/verification", verificationPinWheelIncome);
pinWheelRoutes.post("/create/user", createUser);

module.exports = pinWheelRoutes