let prom=new Promise(function(resolve,reject){
setTimeout(function(){
	resolve("Hello, world")},1000)
	
})
prom.then(function(value){
	 let div = document.getElementById("output");
	  div.innerHTML=value;
})