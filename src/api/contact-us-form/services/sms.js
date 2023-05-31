'use strict';
    module.exports = {

      sendSms(result){
        const accountSid = 'AC6d70f4a142813b07c2796c07243d8300';
        const authToken = 'c2262c170b5bf73da73849ca174946f8';
        const client = require('twilio')(accountSid, authToken);

        client.messages
            .create({
                body:"New Message ContactUs" +"\n"+
                     "nombre: "+result.nombre+"\n"+
                     "email: " +result.email+"\n"+
                     "telefono:" +result.telefono+"\n"+
                     "asunto: " +result.asunto+"\n"+
                     "mensaje :" +result.mensaje ,
                from: '+13156664099',
                to: '+51920511060'
            })
            .then(message => console.log(message.sid));
      },


    };
