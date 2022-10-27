const data = require('../models/g2');

module.exports = async (req, res) => {

    let show = {};
    
    
    if ( req.query.userid) {
        show = await data.findOne({
            userId: req.query.userid
        });
   if(show==null){
       res.redirect('g2')
   }

}
res.render('g', { show: show ,usertype: req.session.usertype})

}