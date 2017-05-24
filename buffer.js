var buffer=new Buffer("helloNaveen","UTF-8")
console.log(buffer);

console.log(buffer.toJSON());
buffer.write("Good");
console.log(buffer.toString());


