
const data = require('../models/g2');
module.exports = async (req,res) =>{
    console.log("hello");
    let image1=req.files.image1;
    
    image1.mv(path.resolve(__dirname,'public/img',image1.name),async (error)=>{
        await data.create({ ...req.body,image1:'/img'+image1.name})
        res.redirect('/g2')
        
    })
}
