const myPath=require('../utils/path')

exports.error404= (req,res,next)=>{
    res.status(404).sendFile(myPath('pagenotFound.html'))
 }