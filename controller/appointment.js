const Slot = require('../models/slot.js')
 const path = require('path')

 module.exports = (req,res) =>{
         console.log(req.body);
    Slot.create({Date: req.body.Date, Time: req.body.Time, isAppointmentAvailable : false}, (error, user) => {
        res.redirect('/slotAdmin')
    })
}
