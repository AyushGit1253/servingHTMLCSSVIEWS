const path=require('path')
const express=require('express')
const router=express.Router()


const myPath=require('../utils/path')
const adminData=require('./admin')

const shopController=require('../controller/product')

/* router.get('/',(req,res,next)=>{
   // res.send('<h1>welcome to shop</h1>')//directly add path of shop.html
    //res.sendFile(path.join(__dirname,'../','views','shop.html'))
    console.log(adminData.products)
    res.sendFile(myPath('shop.html'))

})
router.get('/contactus',(req,res)=>{
   // res.sendFile(path.join(__dirname,'../','views','contact.html'))
    res.sendFile(myPath('contact.html'))
})
router.post('/success',(req,res)=>{
    res.send(`<h1>Form succesfully filled!!</h1>`)
}) */

router.get('/',shopController.getFromShopController)
router.get('/contactus',shopController.getContactController)
router.post('/success',shopController.postSuccessController)

module.exports=router