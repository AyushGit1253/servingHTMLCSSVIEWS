const path=require('path')
const express=require('express')
const router=express.Router()

router.get('/add-product',(req,res,next)=>{
    res.sendFile(
        //we r sending form but we can send direct file path also by seperating it in other folder views for clean code
    /* `<form action="/admin/product" method="POST"><input type="text" name="uname">
    <input type="text" name="size"><button type="submit">Send</button></form>`) */
    //send above code to add-product.html and here add its path
        
    path.join(__dirname, '../','views','add-product.html'))
    //__dirname gives location from OS till your project
})

router.post('/add-product',(req,res,next)=>{
    const uname=req.body.uname
    const size=req.body.size
    console.log(uname)
    console.log(size)
    res.redirect('/')
})

module.exports=router