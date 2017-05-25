var express=require("express");
var app=express();

var router=express.Router();

             var importData=require("./import.js")

             console.log(importData)
router.get("/",function(request,response)
{
response.json({message:"Hello Bengalore!!"})
})
router.get("/user",function(request,response){
	response.json({message:"this is user endpoint"})
})
router.get("/user/naveen",function(request,response){
	response.json({message:"this is user endpoint2"})
})

router.get("/customer",function(request,response){

var customer1=[{name:"anbu",age:22,city:"bangalore"},
				{name:"babu",age:23,city:"hyderabad"},
				{name:"naveen",age:23,city:"bangalore"},
				{name:"abi",age:23,city:"utthar pradesh"}]

	response.json({customer1})
})

 app.use("/api",router)
var PORT=process.env.PORT || 1337;

app.listen(PORT,function()
{
console.log("server listen at port 1337!!" + PORT)
	})
