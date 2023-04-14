const express = require("express") ;

const bodyParser  = require("body-parser") ;

const app = express() ;

const date = require(__dirname + "/date.js") ;

app.use(bodyParser.urlencoded({extended: true})) ;

app.use(express.static("public")) ;

app.set("view engine" , "ejs") ;

app.listen(2500 , function(){
    console.log("Server running at port 2500") ;
});

let items = ["Buy Food" , "Cook Food" , "Eat Food"] ;
let workItems = [] ;
app.get("/" , function(req,res){
    
    let day = date.GetDate() ;
    res.render("list" , {kindOfDay : day , newlistitems: items }) ;
})

app.post("/" , function(req, res){

    let item = req.body.newItem ;

    items.push(item) ;

    res.redirect("/");
})

app.get("/work" , function(req,res){

    res.render("list" , {kindOfDay: "Work List" , newlistitems : workItems}) ;
})

app.post("/work" , function(req,res){
    let item = req.body.newItem ;
    workItems.push(item) ;
    res.redirect("/work") ;
})

app.get("/about", function(req,res){
    res.render("about") ;
}) ;