const express = require("express");
const app = express();
const bodyParser = require("body-parser");
const request = require("request");
const path = require("path");
const jquery=require("jquery");
app.use(bodyParser.urlencoded({extended: true}));

const port = 3000;

// Referring to absolute static files from assets folder
app.use(express.static(path.join(__dirname, 'public')));

app.set("view engine", "ejs");

app.get("/front-load-washers", function(req, res){
    request('https://m.lowes.com/CatalogServices/product/nvalue/v1_0?nValue=4294857975&maxResults=20&showURL=1&rollUpVariants=1&showUrl=true&storeNumber=0595&priceFlag=rangeBalance&showMarketingBullets=1', function(error, response, body){
         if(!error && response.statusCode == 200){
             var data = JSON.parse(response.body);
             res.render("front-load-washers", {data: data});
         }
    })
});


//app.listen(process.env.PORT, process.env.IP, function(){
app.listen(port, function(){
     console.log("Server Started");
});