 const User = require('../models/user.js')
 const path = require('path')

 module.exports = (req,res) =>{
         console.log(req.body);
    User.create(req.body, (error, user) =>{
         if(error){
          const validationErrors = Object.keys(error.errors).map(key => error.errors[key].message)          
          // req.flash('validationErrors',validationErrors)
//          // req.flash('data',req.body)
             console.log(error);
          return res.redirect('/')    
        }        
        
//        // alert(" Sign Up Is Successfull ")
        res.redirect('/login')
    })
 }