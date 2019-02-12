const ReverseNumber=function(){
		let	mas=[];
	for(let i=arguments.length-1;i>=0;i--){
	if(!isNaN(arguments[i])) {
		mas+=arguments[i];		
			} 			   
		}
		console.log(mas);	
	}		
ReverseNumber(-1,3,5);
