
const Pipe_=function(){
for(let i=1;i<arguments.length;i++){
	arguments[i](arguments[0]);
			}	

	  }
function Func(n){
	console.log(n+1);
	return Func(n+1);
  }
Pipe_(1,Func,Func);