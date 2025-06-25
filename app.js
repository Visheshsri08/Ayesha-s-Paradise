const express = require("express");
const app = express();
const path = require("path");

const ejsmate=require("ejs-mate");

app.set("view engine","ejs");
app.set("views",path.join(__dirname ,"views"));
app.use(express.urlencoded({extended: true}));

app.engine("ejs",ejsmate);
app.use(express.static(path.join(__dirname,"/public"))); 
app.use(require("express-method-override")("_method"));


app.get("/home",(req,res)=>{
    res.render("pages/home.ejs");
});

app.listen(4000,()=>{
    console.log("server is listening to port 8080");
});