const express = require("express");
const { verificationPinWheelIncome, createUser, getLinkToken } = require("../controller/pinWheel.controller");
const pinWheelRoutes = express.Router();

pinWheelRoutes.get("/verification", verificationPinWheelIncome);
pinWheelRoutes.post("/create/user", createUser);
pinWheelRoutes.post("/link", getLinkToken);

module.exports = pinWheelRoutes