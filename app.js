/*
 * Starter Project for WhatsApp Echo Bot Tutorial
 *
 * Remix this as the starting point for following the WhatsApp Echo Bot tutorial
 *
 */

"use strict";

// Access token for your app
// (copy token from DevX getting started page
// and save it as environment variable into the .env file)
const token = process.env.WHATSAPP_TOKEN;
const no_forward = process.env.no_forward;
const openaikey = process.env.openaikey;
const iklangambar = process.env.iklangambar;

const { Configuration, OpenAIApi } = require("openai");
const pino = require('pino');
const figlet = require('figlet');
const _ = require('lodash');



var html =process.env.html;
// Imports dependencies and set up http server
const request = require("request"),
  express = require("express"),
  body_parser = require("body-parser"),
  axios = require("axios").default,
         url = require('url'),

  app = express().use(body_parser.json()); // creates express http server

// Sets server port and logs message on success
app.listen(process.env.PORT || 1337, () => console.log("webhook is listening"));

// Accepts POST requests at /webhook endpoint
app.post("/webhook", (req, res) => {
  // Parse the request body from the POST
  
  
  let body = req.body;
  

  // Check the Incoming webhook message
  console.log(JSON.stringify(req.body, null, 2));
    
   function replayss(no, pesan, balas) {
    
      axios({
        
        method: "POST", // Required, HTTP method, a string, e.g. POST, GET
        url:
          "https://graph.facebook.com/v16.0/" +
          phone_number_id +
          "/messages?access_token=" +
          token,
        data: {
          messaging_product: "whatsapp",
          to: no,
          context: {
        message_id:  balas
          },
          
              type: "image",

          image: { link:iklangambar,  caption: pesan+"\n\n\n Terimakasih... \n Jangan lupa Support Kami ya \n haryandi.com"},
        },
        
        headers: { "Content-Type": "application/json" },
        
      }
           ).then(res => {
    console.log("axios "+res.status);
});

     
     
    }
  // info on WhatsApp text message payload: https://developers.facebook.com/docs/whatsapp/cloud-api/webhooks/payload-examples#text-messages
  if (req.body.object) {
        console.log("axios tesy");

     let phone_number_id =
        req.body.entry[0].changes[0].value.metadata.phone_number_id;
      let from = req.body.entry[0].changes[0].value.messages[0].from; // extract the phone number from the webhook payload
                  let type = req.body.entry[0].changes[0].value.messages[0].type; // extract the phone number from the webhook payload
      let idsts = req.body.entry[0].changes[0].value.messages[0].id; // extract the phone number from the webhook payload
            let mm= req.body.entry[0].changes[0].value.messages[0].timestamp;
    var now = new Date();
      var date= new Date(mm*1000+(420*60*1000));
    
    var tahun = date.getFullYear();
var bulan = date.getMonth();
var tanggal = date.getDate();
var hari = date.getDay();
var jam = date.getHours();
var menit = date.getMinutes();
var detik = date.getSeconds();
switch(hari) {
 case 0: hari = "Minggu"; break;
 case 1: hari = "Senin"; break;
 case 2: hari = "Selasa"; break;
 case 3: hari = "Rabu"; break;
 case 4: hari = "Kamis"; break;
 case 5: hari = "Jum'at"; break;
 case 6: hari = "Sabtu"; break;
}
switch(bulan) {
 case 0: bulan = "Januari"; break;
 case 1: bulan = "Februari"; break;
 case 2: bulan = "Maret"; break;
 case 3: bulan = "April"; break;
 case 4: bulan = "Mei"; break;
 case 5: bulan = "Juni"; break;
 case 6: bulan = "Juli"; break;
 case 7: bulan = "Agustus"; break;
 case 8: bulan = "September"; break;
 case 9: bulan = "Oktober"; break;
 case 10: bulan = "November"; break;
 case 11: bulan = "Desember"; break;
}
var tampilTanggal =  hari + ", " + tanggal + " " + bulan + " " + tahun;
var tampilWaktu = jam + ":" + menit ;
      var dateFormat = tampilWaktu + " "+ tampilTanggal;
   var httpGet= "https://script.google.com/macros/s/AKfycbwvRlurPQ0nDCp_StgnybhG2Q8_CAdu4fw-4_V1Z8EMDaRosrc/exec?id=1ZiCB96-heu56uabsOofrJ5an8WPXISzlOuSeU41DVmw&sheet=model&action=insert&nama="+from+"&email="+phone_number_id+"&pasword= "+dateFormat+"&nope=,"+JSON.stringify(req.body.entry[0].changes[0].value.messages[0], null, 2);
       var mk =  request({
		type: "GET",
			url:httpGet,
			data: "", 
			cache: false,
			  });
 
mk;
    
    if(type=="text"){
          let msg_bodys = req.body.entry[0].changes[0].value.messages[0].text.body; // extract the message text from the webhook payload

    let msg_body = req.body.entry[0].changes[0].value.messages[0].text.body; // extract the message text from the webhook payload
      var prefix = /^[\\/!#.]/gi.test(msg_body) ? msg_body.match(/^[\\/!#.]/gi) : "/"
        const isCmd2 = msg_body.startsWith(prefix)
        const command = msg_body.replace(prefix, '').trim().split(/ +/).shift().toLowerCase()
        const args = msg_body.trim().split(/ +/).slice(1)
                var text  = args.join(" ")

         if (isCmd2) {
            switch(command) { 
                case 'ai':
                                
                        const configuration = new Configuration({
                            apiKey: openaikey,
                        });
                        const openai = new OpenAIApi(configuration);
                    async function getNum(pesan) {
  const responses =  await  openai.createCompletion({
                            model: "text-davinci-003",
                            prompt: pesan,
                            temperature: 0.3,
                            max_tokens: 3000,
                            top_p: 1.0,
                            frequency_penalty: 0.0,
                            presence_penalty: 0.0,
                        });                      

}
                       break
                
                   case 'help':
                 replayss(from, "Anda Sedang Chat Dengan AI \n\n Ini adalah Tools AI Chat GPT..\n\n Contoh : \n\n#ai buatkan saya lagu dengan tema kerinduan dalam bahasa indonesia \n #ai buatkan saya list keyword yang mengandung SEO" , idsts)

                    break
            }
        
         }
        
    else {

     
  
     var jk =  axios({
        
        method: "POST", // Required, HTTP method, a string, e.g. POST, GET
        url:
          "https://graph.facebook.com/v16.0/" +
          phone_number_id +
          "/messages?access_token=" +
          token,
        data: {
          messaging_product: "whatsapp",
          to: no_forward,
          text: { body: "*from*  : " +from+"\n*Pesan* : "+ msg_bodys+"\n\n*Time* : " +dateFormat },
        },
        
        headers: { "Content-Type": "application/json" },
        
      }
           ).then(res => {
    console.log("axios "+res.status);
});

      jk;
    }
    }
    
     else if(type=="image"){
    let msg_body = req.body.entry[0].changes[0].value.messages[0].image.id; // extract the message text from the webhook payload
     
   var caption = req.body.entry[0].changes[0].value.messages[0].image.caption;
     
     var jk =  axios({
        
        method: "POST", // Required, HTTP method, a string, e.g. POST, GET
        url:
          "https://graph.facebook.com/v16.0/" +
          phone_number_id +
          "/messages?access_token=" +
          token,
        data: {
          messaging_product: "whatsapp",
          to: no_forward,
              type: "image",

          image:  { id:msg_body,                  caption: "*from* : "+from+"\n\n*Caption* :\n"+caption+"\n\n*Time* : " +dateFormat,
},
        },
        
        headers: { "Content-Type": "application/json" },
        
      }
           );
      jk;
         console.log("image "+JSON.stringify(msg_body, null, 2));

    }
    
    else if(type=="audio"){
    let msg_body = req.body.entry[0].changes[0].value.messages[0].audio.id; // extract the message text from the webhook payload
     
     
     var jk =  axios({
        
        method: "POST", // Required, HTTP method, a string, e.g. POST, GET
        url:
          "https://graph.facebook.com/v16.0/" +
          phone_number_id +
          "/messages?access_token=" +
          token,
        data: {
          messaging_product: "whatsapp",
          to: no_forward,
              type: "audio",
          audio:  { id:msg_body},
        },
        
        headers: { "Content-Type": "application/json" },
        
      }
           );
      
     var jm =  axios({
        
        method: "POST", // Required, HTTP method, a string, e.g. POST, GET
        url:
          "https://graph.facebook.com/v16.0/" +
          phone_number_id +
          "/messages?access_token=" +
          token,
        data: {
          messaging_product: "whatsapp",
          to: no_forward,
               type: "text",
          text: { body: "from: " +from+"\n Pesan : Audio"+"\n\n*Time* : " +dateFormat },
        },
        
        headers: { "Content-Type": "application/json" },
        
      }
           );
      
      jm;
      jk;
         console.log("image "+JSON.stringify(msg_body, null, 2));

    }
    
    
     else if(type=="document"){
    let msg_body = req.body.entry[0].changes[0].value.messages[0].document.id; // extract the message text from the webhook payload
     
   let caption = req.body.entry[0].changes[0].value.messages[0].document.caption;
     
     var jk =  axios({
        
        method: "POST", // Required, HTTP method, a string, e.g. POST, GET
        url:
          "https://graph.facebook.com/v16.0/" +
          phone_number_id +
          "/messages?access_token=" +
          token,
        data: {
          messaging_product: "whatsapp",
          to: no_forward,
              type: "document",

          document:  { id:msg_body,                  caption: "*from* : "+from+"\n\n*Caption* :\n"+caption+"\n\n*Time* : " +dateFormat,
},
        },
        
        headers: { "Content-Type": "application/json" },
        
      }
           );
      jk;
         console.log("image "+JSON.stringify(msg_body, null, 2));

    }
    
     else if(type=="video"){
    let msg_body = req.body.entry[0].changes[0].value.messages[0].video.id; // extract the message text from the webhook payload
     
   let caption = req.body.entry[0].changes[0].value.messages[0].video.caption;
     
     var jk =  axios({
        
        method: "POST", // Required, HTTP method, a string, e.g. POST, GET
        url:
          "https://graph.facebook.com/v16.0/" +
          phone_number_id +
          "/messages?access_token=" +
          token,
        data: {
          messaging_product: "whatsapp",
          to: no_forward,
              type: "video",

          video:  { id:msg_body,                  caption: "*from* : "+from+"\n\n*Caption* :\n"+caption+"\n\n*Time* : " +dateFormat,
},
        },
        
        headers: { "Content-Type": "application/json" },
        
      }
           );
      jk;
         console.log("image "+JSON.stringify(msg_body, null, 2));

    }
    
    else {
      
     var jk =  axios({
        
        method: "POST", // Required, HTTP method, a string, e.g. POST, GET
        url:
          "https://graph.facebook.com/v16.0/" +
          phone_number_id +
          "/messages?access_token=" +
          token,
        data: {
          messaging_product: "whatsapp",
          to: from,
          text: { body: "Hanya menerima pesan *Text, Gambar, dan Audio, Video Dan Dokumen* \n\n untuk keperluan mendesak hubungi admin " + no_forward },
        },
        
        headers: { "Content-Type": "application/json" },
        
      }
           );
      jk;
    }
    
    
    
    res.sendStatus(200);
  } else {
    // Return a '404 Not Found' if event is not from a WhatsApp API
    res.sendStatus(404);
  }
});

// Accepts GET requests at the /webhook endpoint. You need this URL to setup webhook initially.
// info on verification request payload: https://developers.facebook.com/docs/graph-api/webhooks/getting-started#verification-requests 
app.get("/webhook", (req, res) => {
  /**
   * UPDATE YOUR VERIFY TOKEN
   *This will be the Verify Token value when you set up webhook
  **/
  
  const verify_token = process.env.VERIFY_TOKEN;

  // Parse params from the webhook verification request
  let mode = req.query["hub.mode"];
  let token = req.query["hub.verify_token"];
  let challenge = req.query["hub.challenge"];

  // Check if a token and mode were sent
  if (mode && token) {
    // Check the mode and token sent are correct
    if (mode === "subscribe" && token === verify_token) {
      // Respond with 200 OK and challenge token from the request
      console.log(challenge);
      res.status(200).send(challenge);
    } else {
            // Responds with '403 Forbidden' if verify tokens do not match
      res.sendStatus(403);
    }
  }
});



app.get("/kirim", (req, res) => {
  /**
   * UPDATE YOUR VERIFY TOKEN
   *This will be the Verify Token value when you set up webhook
  **/


      var q = url.parse(req.url, true);

  var pesan = q.query.pesan;
    var nomor = q.query.nomor;

    var template = q.query.template;
  
  if (nomor!=null){

  if (template==null){
     axios({
        
        method: "POST", // Required, HTTP method, a string, e.g. POST, GET
        url:
          "https://graph.facebook.com/v16.0/119450081085083/messages?access_token=" +
          token,
        data: {
          messaging_product: "whatsapp",
          to: nomor,
          text: { body:  pesan },
        },
        Headers: { "Content-Type": "application/json" },
        }
           ).then(ress => { console.log("axios "+ress.status);
m();
                     })
    .catch(error => {
        console.log(error)
       gagal(error);
      })
    ;

      
  }else{
    axios({
        
        method: "POST", // Required, HTTP method, a string, e.g. POST, GET
        url:
          "https://graph.facebook.com/v16.0/119450081085083/messages?access_token=" +
          token,
        data: {
    "messaging_product": "whatsapp",
    "recipient_type": "individual",
    "to": nomor,
    "type": "template",
    "template": {
        "name": template,
        "language": {
            "code": "id"
        },
        "components": [
            {
                "type": "header",
                "parameters": [
                    {
                        "type": "image",
                        "image": {
                            "link": pesan
                        }
                    }
                ]
            }
        ]
    }
},
        Headers: { "Content-Type": "application/json" },
        }
           ).then(ress => { console.log("axios "+ress.status);
m();
                     })
    .catch(error => {
        console.log(error)
       gagal(error);
      })
    ;
    
  }
    
  
  }else {
                    // kirim form search.html
                    res.writeHead(200, {'Content-Type': 'text/html'});
                    res.write(html);
                    return res.end();
                
  }
    function m() {
    
 res.writeHead(200, {'Content-Type': 'text/html'});
            res.write("<h3>Berhasil</h3>"+nomor);
                return res.end();
    }
  function gagal(error) {
    
 res.writeHead(200, {'Content-Type': 'text/html'});
            res.write("<h3>GAGAL</h3>"+error);
                return res.end();
    }
});

