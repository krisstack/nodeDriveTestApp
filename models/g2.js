const mongoose = require('mongoose')
const bcrypt = require('bcrypt')
var uniqueValidator = require('mongoose-unique-validator')
const Schema = mongoose.Schema;
const g2_Schema = new Schema({
          fName:String,
          lName:String,
          address:String,
          lNum:{
              type :String,
            //  required:true,
            //  unique:true
          },
          dob:{
            type: Date,
           // required:true,
           // unique:true
          
        },
        
          userId:String,
          carDetails:String,
          image1:String,
          image2:String,
          slotId:String
        
})
const data =mongoose.model('g2',g2_Schema);
module.exports = data;
