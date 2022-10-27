
module.exports = (req,res) =>{

    var username = "" 
    var password = "" 
    //const refresh = req.flash('data')[0]

    if(typeof data!="undefined"){
        username = refresh.username
        password = refresh.password
    }

    res.render('signup',{
        //errors: req.session.validationErrors
      //  errors: req.flash('validationErrors'),
        username: username,
        password: password,
        usertype: req.session.usertype
    })
}