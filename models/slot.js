const mongoose = require('mongoose')
var Schema = mongoose.Schema;
const slotSchema = new Schema({
    
    Date: {
        type: Date,
        
        
    },
    Time:{
        type: String
    },
   
    isAppointmentAvailable: {
      type: Boolean
    },

  
});
const Slot = mongoose.model("appointment", slotSchema);
module.exports = Slot;