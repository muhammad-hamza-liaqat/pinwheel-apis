const { verifyIncome } = require("../utils/pinWheel.helper");
const axios = require("axios");

const verificationPinWheelIncome = async (req, res) => {
    try {
        const { userId } = req.body;
        const incomeData = await verifyIncome(userId);
        console.log("response ---------------------------->", incomeData);
        return res.status(200).json({ message: "success", data: incomeData });

    } catch (error) {
        console.log("an error occured: ", error);
        return res.status(500).json({ message: "an error occured: verificationPinWheel: ", data: error.message })
    }
}


const createUser = async (req, res) => {
    const { userData } = req.body;
    try {
        const pinwheelApiUrl = `${process.env.PINWHEEL_API_BASE_URL}/v1/accounts`;
        const apiKey = process.env.PIN_WHEEL_API_KEY;
        console.log("Pinwheel API URL:", pinwheelApiUrl);
        console.log("API Key:", apiKey);

        const response = await axios.post(pinwheelApiUrl, userData, {
            headers: {
                'Authorization': `Bearer ${apiKey}`,
                'Content-Type': 'application/json',
            },
        });

        return res.status(201).json({ message: "User created successfully!", data: response.data });

    } catch (error) {
        console.error("An error occurred at create user:", error);
        return res.status(500).json({ message: "Internal server error", data: error.message });
    }
}


module.exports = {
    verificationPinWheelIncome,
    createUser
}