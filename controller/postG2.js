
const data = require('../models/g2');
const path= require('path');
module.exports = async (req,res) => {
    data.create(req.body, (error, data) => {
        res.redirect('/g2')
    })
}