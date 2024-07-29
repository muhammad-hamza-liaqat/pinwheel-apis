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

const getLinkToken = async (req, res) => {
    try {
        const { userId } = req.body;

        const response = await axios.post(
            `${PINWHEEL_API_BASE_URL}/link_tokens`,
            { user_id: userId },
            {
                headers: {
                    'Authorization': `Bearer ${PINWHEEL_API_KEY}`,
                    'Content-Type': 'application/json'
                }
            }
        );

        const linkToken = response.data;
        return res.status(200).json({ message: "Link token generated successfully", data: linkToken });
    } catch (error) {
        console.error("An error occurred while generating the link token:", error);
        // if (error.response) {
        //     console.error("Error Response Data:", error.response.data);
        //     console.error("Error Response Status:", error.response.status);
        //     console.error("Error Response Headers:", error.response.headers);
        //     return res.status(500).json({ message: "Internal server error", data: error.response.data });
        // }
        return res.status(500).json({ message: "Internal server error", data: error.message });
    }
};

module.exports = {
    verificationPinWheelIncome,
    createUser,
    getLinkToken
};
