var EventEmitter=require("events").EventEmitter;
var emitter=new EventEmitter();
var fs=require("fs");
var path=require("path");
var filePath=path.join(__dirname,"some.json")
emitter.on("start_reading",function(filePath)
{
		console.log("start reading the file..!!")
		fs.readFile(filePath, "utf-8",function(err,data){
	
if(err){
			emitter.emit("error",err)
			return;
}
	emitter.emit("print_content",data)
})
})
emitter.on("print_content",function(data)
{
console.log(data)
emitter.emit("done","successfully done reading the file")

})
emitter.on("error",function(message)
{
	console.log("there is an error!!!")
console.log( "error details:" +message)
console.log("couldnot read the file")

})
emitter.on("done",function(message)
{

console.log(message)

})
emitter.emit("start_reading",filePath);
