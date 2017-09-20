const mongoose = require('mongoose');
const Principal = mongoose.model('Principal');
function sendJsonResponse(res,status,content){
    res.status(status);
    res.json(content);
}



module.exports.principalRegister = async (req,res)=>{
    const principal = new Principal();
    principal.name = req.body.name;
    principal.email = req.body.email;
    principal.setPassword(req.body.password);
    await principal.save();
    const token = await principal.generateJwt();
    sendJsonResponse(res, 200, {token});
}