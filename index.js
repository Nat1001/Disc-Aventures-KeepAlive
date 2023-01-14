const https = require('https');
const express = require('express');

const app = express();

app.get("/", (request, response) => {
    console.log(Date.now() + " Ping Received");
    response.sendStatus(200);
});

app.listen(process.env.PORT);

setInterval(() => {
    https.get("https://disc-adventure.onrender.com/");
    console.log("Ping Sent !")
}, 300000);