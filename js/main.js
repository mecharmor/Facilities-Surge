$(document).ready(function(){

$("#SendSMS").click(function (){

 ohSnap('Oh Snap! I cannot process your card...', {color: 'red', icon: 'icon-alert'}); // color matches CSS class `.alert.color`

});

});//Ready

//Twilio Api key ---test
//Friendly Name: facilities
//SID: SKe106cc5ff064b207b5f13d4310061fde
//SECRET: QUAbT8PEbg7cuNAjzTcF8umPbCv5k65F
//Auth Token: 0712f101881c87f0de6c6c381fb09523

// Twilio Credentials
// var accountSid = 'SKe106cc5ff064b207b5f13d4310061fde';
// var authToken = '0712f101881c87f0de6c6c381fb09523';
// //require the Twilio module and create a REST client
// var client = require('twilio')(accountSid, authToken);

// client.messages.create({
//     to: "+15595535690",
//     from: "+15596976435",
//     body: "This is a test",
//     //mediaUrl: "https://c1.staticflickr.com/3/2899/14341091933_1e92e62d12_b.jpg",
// }, function(err, message) {
//     console.log(message.sid);
// });
