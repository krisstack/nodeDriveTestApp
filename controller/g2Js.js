

module.exports = async (req,res) => {
    res.render('g2',{usertype: req.session.usertype})
}