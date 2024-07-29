const { verifyIncome } = require("../utils/pinWheel.helper");

const verificationPinWheel = async (req, res) => {
    // res.end("hello from verificationPinWheel")
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

module.exports = {
    verificationPinWheel
}