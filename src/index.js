const express = require("express");
const cors = require("cors");
const bodyParser = require("body-parser");
require("dotenv").config();

const app = express();

// middleware
app.use(express.json());
app.use(bodyParser.raw({ type: 'application/json' }));
app.use(cors());


app.listen(process.env.PORT, () => {
    console.log(`server is running at http://localhost:${process.env.PORT}/`)
});