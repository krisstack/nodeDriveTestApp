module.exports = (req,res) =>{
    res.render('login',{usertype: req.session.usertype})
}
