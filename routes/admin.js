const path=require('path')
const express=require('express')
const router=express.Router()

const myPath=require('../utils/path')
const addproductController=require('../controller/product')
const products=[]//to send data from admin to shop.js

//router.get('/add-product',(req,res,next)=>{
   // res.sendFile(
        //we r sending form but we can send direct file path also by seperating it in other folder views for clean code
    /* `<form action="/admin/product" method="POST"><input type="text" name="uname">
    <input type="text" name="size"><button type="submit">Send</button></form>`) */
    //send above code to add-product.html and here add its path
        
   // path.join(__dirname, '../','views','add-product.html'))
                //OR

    //__dirname gives location from OS till your project

    //res.sendFile(myPath('add-product.html'))
//})

router.get('/add-product',addproductController.getProduct)//using controller

/* router.post('/add-product',(req,res,next)=>{
    const uname=req.body.uname
    const size=req.body.size
    console.log(uname)
    console.log(size)
    products.push({title:req.body.uname,size:req.body.size})
    res.redirect('/')
}) */
router.post('/add-product',addproductController.postProduct)

module.exports=router

/* module.exports={
    router:router,
    products:products
    //since we are noww using controller so object now not needed as products we will use in controller only
} */