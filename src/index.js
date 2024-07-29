const express = require("express");
const cors = require("cors");
const bodyParser = require("body-parser");
const pinWheel = require("./routes/pinWheel.routes");
require("dotenv").config();

const app = express();

// middleware
app.use(express.json());
app.use(bodyParser.raw({ type: 'application/json' }));
app.use(cors());

// routes 
app.use("/api", pinWheel);

app.listen(process.env.PORT, () => {
    console.log(`server is running at http://localhost:${process.env.PORT}/`)
});