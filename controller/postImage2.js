const data = require('../models/g2');
module.exports= async(req,res) =>{
    
    let image2=req.files.image2;
    image2.mv(path.resolve(__dirname,'public/img',image2.name),async (error)=>{
            await data.create({ ...req.body,image2:'/img'+image2.name})
            res.redirect('/g2')
        
    })
}