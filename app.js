const express=require("express"),
      app    =express(),
      bodyParser=require('body-parser'),
      mongoose  =require("mongoose"),
      indexRoutes=require("./routes/index");

app.set("view engine","ejs");
app.use("/",indexRoutes);
app.use(express.static(__dirname+"/public"))





app.listen(process.env.PORT||8000,function(){
    console.log("The Chakradhar server has started!");
});