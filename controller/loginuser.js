const bcrypt = require('bcrypt')
const User = require('../models/User')

module.exports = (req,res) =>{
    const { username,password } = req.body

    
    console.log(req.body)
   
    User.findOne({username: username},function(error,user){   
      
        if(user){

            console.log("aaaaaaaa")
            bcrypt.compare(password, user.password, (error,same)=>{
                if(same){
                
                console.log("user", user)
                    req.session.userId = user._id,
                    req.session.usertype = user.usertype
                    if (user.usertype=="driver")
                   {
                    res.redirect('/g2')
                } else if(user.usertype="Admin"){
                    res.redirect('/slotAdmin')
                }else {
                    res.redirect('/login')
                }
            }
                else{
                    res.redirect('/')
                }
            
            })
        }
    })
}

        
    
        