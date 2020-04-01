

import express, { static } from "express";
import { urlencoded } from "body-parser";
import request from "request";

const app = express();

app.use(static("public"));
app.use(urlencoded({extended: true}));

app.get("/", function(req,res){

  res.sendFile(__dirname + "/index.html");

});

app.listen(process.env.PORT || 3000, function(){
  console.log("Server started at port 3000");
});
 
