const axios = require("axios");
require("dotenv").config();

const PINWHEEL_API_BASE_URL = process.env.PINWHEEL_API_BASE_URL;
const PINWHEEL_API_KEY = process.env.PINWHEEL_API_KEY;

const verificationPinWheelIncome = async (req, res) => {
    try {
        const { userId } = req.body;
        const verifyIncome = async (userId) => {
            const response = await axios.get(`${PINWHEEL_API_BASE_URL}/verify/income`, {
                headers: {
                    'Authorization': `Bearer ${PINWHEEL_API_KEY}`
                },
                params: {
                    user_id: userId
                }
            });
            return response.data;
        };
        const incomeData = await verifyIncome(userId);

        if (incomeData.error) {
            return res.status(500).json({ message: "Internal server error", data: incomeData.error });
        }
        console.log("response ---------------------------->", incomeData);
        return res.status(200).json({ message: "success", data: incomeData });

    } catch (error) {
        console.log("An error occurred: ", error);
        return res.status(500).json({ message: "An error occurred: verificationPinWheel", data: error.message });
    }
};

const createUser = async (req, res) => {
    const { userData } = req.body;
    try {
        const pinwheelApiUrl = `${PINWHEEL_API_BASE_URL}/v1/accounts`;
        console.log("Pinwheel API URL:", pinwheelApiUrl);
        console.log("API Key:", PINWHEEL_API_KEY);

        const response = await axios.post(pinwheelApiUrl, userData, {
            headers: {
                'Authorization': `Bearer ${PINWHEEL_API_KEY}`,
                'Content-Type': 'application/json',
            },
        });

        return res.status(201).json({ message: "User created successfully!", data: response.data });

    } catch (error) {
        console.error("An error occurred at create user:", error);
        return res.status(500).json({ message: "Internal server error", data: error.message });
    }
};

module.exports = {
    verificationPinWheelIncome,
    createUser
};
