//in routes admin.js shop.js the logic inside callbacks of res.send we are sending here
//so that logic can be inside one file
const myPath=require('../utils/path')
const products=[]

exports.getProduct=(req,res,next)=>{
     res.sendFile(myPath('add-product.html'))
 }

 exports.postProduct=(req,res,next)=>{
    const uname=req.body.uname
    const size=req.body.size
    console.log(uname)
    console.log(size)
    products.push({title:req.body.uname,size:req.body.size})
    res.redirect('/')
}

exports.getFromShopController=(req,res,next)=>{
     console.log(products)
     res.sendFile(myPath('shop.html'))
 }

 exports.getContactController=(req,res)=>{
    // res.sendFile(path.join(__dirname,'../','views','contact.html'))
     res.sendFile(myPath('contact.html'))
 }

 exports.postSuccessController=(req,res)=>{
     res.send(`<h1>Form succesfully filled!!</h1>`)
 }
