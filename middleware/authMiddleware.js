 const User = require('../models/user')
 const path = require('path')
module.exports = (req,res,next) =>{
 User.findById(req.session.userId, (error, user)=>{
    if(error || !user)
        User.create()
        return res.redirect('/')

      next()
 })
 }