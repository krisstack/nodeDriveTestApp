const data = require('../models/g2');
module.exports= async (req, res) => {
    let userid = req.params.id
    let show={};
    console.log(userid)
        if (userid!= null) {
        
       
         show = await data.findOneAndUpdate({
                userid  
            }, {
                address: req.body.address ,
                carDetails: req.body.carDetails
            })
            res.redirect('/g')
        }
        
       
    }
