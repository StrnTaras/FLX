const getMin=function(){
	let min=0;
for(let i=0;i<arguments.length;i++){
	 if(arguments[i]<min){
		 min=arguments[i];			 
	  }
	}
	console.log(min);	
}
getMin(3,0,-3);