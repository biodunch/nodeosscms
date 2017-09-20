function sendJsonResponse (res, status, content) {
    res.status(status);
    res.json(content);
}



module.exports.index = (req,res)=>{
    sendJsonResponse(res, 200, "Hello i work");
}