function twilio(){
    const {accountSid,authToken, PORT} = require("./config");
const client = require('twilio')(accountSid, authToken);

client.messages
      .create({
         body: 'Hi, dream come through I am a Twilio intern',
         from: '+16074994494',
         to: '+37254200777'
       })
      .then(message => console.log(message)).catch(err=>{
          console.log(err)
      });
}
module.exports=twilio