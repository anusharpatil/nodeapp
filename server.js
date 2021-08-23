var item=[]
var express = require("express")
var app = express()
var bodyparser=require('body-parser')
//use any one in next two lines to read data from form
app.use(express.urlencoded({extended:true}))
//app.use(bodyparser.urlencoded({extended:true}))
var server = app.listen(8087,function(){
    console.log("Server started to listen..")
})

app.get("/",function(req,res){
    res.send("Hello from server")
})