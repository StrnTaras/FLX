const ReverseNumber=function(){
		let	mas=[];
		let p;
	for(let i=arguments.length-1;i>=0;i--){
	if(!isNaN(arguments[i])) {
		if(arguments[i]<0){
			arguments[i]=Math.sign(-arguments[i]);
		}
		console.log(arguments[i]);	
		mas+=arguments[i];		
			} 
			p=Math.sign(-arguments[i]);			   
		}
	
	console.log(p);
		console.log(Math.sign(-Number(mas)));	
	}		
ReverseNumber(-1,3,5);
