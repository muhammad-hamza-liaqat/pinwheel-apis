const axios = require('axios');
require("dotenv").config();

const PINWHEEL_API_BASE_URL = process.env.PINWHEEL_API_BASE_URL;
console.log("PINWHEEL_API_BASE_URL ------------------------------>",PINWHEEL_API_BASE_URL);
const PINWHEEL_API_KEY = process.env.PIN_WHEEL_API_KEY;

const verifyIncome = async (userId) => {
  try {
    const response = await axios.get(`${PINWHEEL_API_BASE_URL}/verify/income`, {
      headers: {
        'Authorization': `Bearer ${PINWHEEL_API_KEY}`
      },
      params: {
        user_id: userId
      }
    });
    return response.data;
  } catch (error) {
    console.log("an error occured at: verifyIncome helper function: ", error)
    throw new Error(error.response ? error.response.data : error.message);
  }
};

module.exports = {
  verifyIncome
};
