const User = require("../models/User");
const Slot = require('../models/slot.js');
module.exports = async (req, res, error) => {

  try {
    let success = await Slot.findOne({ Date: new Date(req.body.Date), Time: req.body.Time });
    console.log(success)
    if(success) {
      let obj = {
        fName: req.body.fName,
     lName: req.body.lName,
     address: req.body.address,
     carDetails: req.body.carDetails,
      image1: req.body.image1,
      Date: req.body.Date,
      Time: req.body.Time,
      image2: req.body.image2,
      appointmentId: success._id
      }
      console.log(obj);

      let result = await User.findOneAndUpdate({ _id: req.session.userId }, obj);

      if (result) {
        res.redirect("/g");
      }
    }
    else {
      let obj = {
        fName: req.body.fName,
     lName: req.body.lName,
     address: req.body.address,
     carDetails: req.body.carDetails,
      image1: req.body.image1,
      Date: req.body.Date,
      Time: req.body.Time,
      image2: req.body.image2
      }
      console.log(obj);

      let result = await User.findOneAndUpdate({ _id: req.session.userId }, obj);

      if (result) {
        res.redirect("/g");
      }
    }
  }
  catch(e){
    console.log("error")
    console.log(e);
    res.redirect("/g2");
  }

};
