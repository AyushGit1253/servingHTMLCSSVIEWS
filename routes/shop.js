const path=require('path')
const express=require('express')
const router=express.Router()

router.get('/',(req,res,next)=>{
   // res.send('<h1>welcome to shop</h1>')//directly add path of shop.html
    res.sendFile(path.join(__dirname,'../','views','shop.html'))

})
router.get('/contactus',(req,res)=>{
    res.sendFile(path.join(__dirname,'../','views','contact.html'))
})
router.post('/success',(req,res)=>{
    res.send(`<h1>Form succesfully filled!!</h1>`)
})
module.exports=router