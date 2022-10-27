

module.exports = (req, res) => {
    res.render('dashboard',{usertype: req.session.usertype})
}