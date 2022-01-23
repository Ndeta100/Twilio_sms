function twilio(){
    const {accountSid,authToken, FROM_PHONE,TO_PHONE} = require("./config");
const client = require('twilio')(accountSid, authToken);

client.messages
      .create({
         body: 'Hi, dream come through I am a Twilio intern',
         from: FROM_PHONE,
         to: TO_PHONE
       })
      .then(message => console.log(message)).catch(err=>{
          console.log(err)
      });
}
module.exports=twilio