var nodemailer = require('nodemailer');

var form = document.querySelector('mce-EMAIL');
var transpoter = nodemailer.createTransport({
    serv:'gmail',
    auth:{
        user: 'toureprince513@gmail.com',
        pass: 'zack123!!!'
    }
});
var mailoptions ={
    from: 'toureprince513@gmail.com',
    to: form.value,
    subject: 'Nafis.',
    text:"Salut! Bienvenu sur mon portfolio."
}
transporter.sendMail(mailoptions, function(error, info){
    if(error){
        console.log(error);
    }
    else{
        console.log('email envoyé:'+ info.reponse);
    }
})
