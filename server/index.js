
const express = require("express")
const cors = require("cors")
const app = express()
const db = require('./db/db')
const routes = require('./routes/route')
const bodyparser = require("body-parser")



//middlewares

app.use(cors())

app.use(express.json({limit:'100mb'})); 

app.use(bodyparser.json())

app.use((req,res,next)=>{
    console.log(req.path,req.method)
    next()
})

//db connection

db.connect()
  .then(() => console.log('Connected to PostgreSQL'))
  .catch(err => console.error('Connection error', err.stack));



//Routes

app.get('/',(req,res)=>{
    res.send("Hello I am server")
})

app.post('/signup',routes)

app.post('/login',routes)

app.get('/stocks',routes)

app.post('/create-checkout-session',routes)

app.post('/getorders',routes)

app.post('/sellorder',routes)

app.post('/getuser',routes)

app.listen(8000,()=>{
    console.log("Server started running at port 8000");
})

