const Slot = require("../models/slot.js");
const path= require('path');
module.exports = (req, res) => {
  // const date_array = [];
  // Slot.find({}).then((success) => {
  //   for (let i = 0; i <= success.length; i++) {
  //     let string = JSON.stringify(success[i]);
  //     if (string !== undefined) {
  //       let objectValue = JSON.parse(string);
  //       date_array.push(objectValue["date"]);
  //     }
  //   }
    res.render("slotAdmin", {
      usertype: req.session.usertype
    });
};
