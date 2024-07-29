const axios = require('axios');

const PINWHEEL_API_BASE_URL = 'https://api.getpinwheel.com/v1';
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
    return response.status(200).json({message: "data fetched successfully", data: response.data})
  } catch (error) {
    console.log("an error occured at verifyIncome:  ", error);
    return resizeBy.status(500).json({message: "an error occured", details: error.message})
  }
};

module.exports = {
  verifyIncome
};
