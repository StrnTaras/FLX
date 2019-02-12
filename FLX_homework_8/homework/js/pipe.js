
const Pipe_=function(){
		let argLength=arguments.length-1;
		if(argLength>=2){
			arguments[0]=argLength;
		}
		console.log(arguments[0+1](arguments[0]));	
				}
				function Func(n){	
					return n+1;
						}
Pipe_(1,Func,Func,Func);