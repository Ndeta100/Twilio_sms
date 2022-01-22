const twilio=require('./twilio')
const {PORT} = require("./config");

      const express =require('express')
      const app=express()
      app.get('/smsme',(req,res)=>{
            twilio()
       res.send('message was sent')
      })
      app.listen(PORT, ()=>{
          console.log(`App running on port ${PORT}`)
      })
      