const express = require('express');
const app = express();
const userRouter = require('./routes/userRoute');
const port = 4200;
// app.get('/',(req,res)=>{
//     res.send('hello')
// })



app.use('/',userRouter)
app.listen(port,()=>{
    console.log(`server is listening on ${port}...`)
})