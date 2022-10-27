const Slot = require("../models/slot");

module.exports = async (req, res) => {
    let date = req.query.Date;
        const data = await Slot.find({ Date: date });
        res.send(data);
};
