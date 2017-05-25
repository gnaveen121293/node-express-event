            //var string="hello i am from import";

             /*var sample=function(){
 			return "hello i am from import"
 				}
				module.exports=sample();*/

var wish=function(name){
 	return "hello i am from import" + name;
 }

 var displayMessage=function(){
 	return "this is a function"
 }
/*module.exports= {

	wish : wish,
	display : displayMessage
};*/


module.exports.display=function(){

	return "this my new new function"
}