const User = require("../models/User");

module.exports = async (req, res) => {
    let date = req.query.Date;
    console.log(req.query.Date)
    const data = await User.find({ Date: date });
    res.send(data);
};