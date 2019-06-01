const express=require("express"),
      router=express.Router();

router.get("/",function(req,res){
    res.render("home");
});
router.get("/color-game",function(req,res){
    res.render("color-game");
});






module.exports=router;