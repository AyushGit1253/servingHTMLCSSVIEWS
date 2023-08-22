const http=require('http')

const express=require('express')

const bodyParser=require('body-parser')

const app=express()

const adminRoute=require('./routes/admin')
const shopRoute=require('./routes/shop')

app.use(bodyParser.urlencoded({extended:false}))

app.use(shopRoute)
app.use('/admin',adminRoute)
/* 
app.get('/', (req, res, next) => {
    res.send('<h1>welcome to express</h1>');
}); */

app.use((req,res,next)=>{
    res.status(404).send('<h1>Page not found</h1>')
})
app.listen(3000)