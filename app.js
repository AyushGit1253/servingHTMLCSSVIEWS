const http=require('http')
const path=require('path')
const express=require('express')

const myPath=require('./utils/path')
const bodyParser=require('body-parser')

const app=express()

const adminRoute=require('./routes/admin')
const shopRoute=require('./routes/shop')
const errorController=require('./controller/error')

app.use(bodyParser.urlencoded({extended:false}))

app.use(express.static(path.join(__dirname,'public')))//adds static files to public, anyone can see by ctrl+u

app.use(shopRoute)
app.use('/admin',adminRoute)

/* app.use((req,res,next)=>{
   // res.status(404).send('<h1>Page not found</h1>')
   //here ../ not used in path bcoz app.js is already outside and not in any folder
   //res.status(404).sendFile(path.join(__dirname,'views','pagenotFound.html'))

   res.status(404).sendFile(myPath('pagenotFound.html'))
}) */

app.use(errorController.error404)

app.listen(3000)