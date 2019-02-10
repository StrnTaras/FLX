const ReverseNumber=function(n){
	let arr=[];
	let a=arguments;	
for(let i=0;i<a.length;i++){
	arr.push(a[i]);
		}
		let str=arr.toString().split("");
		console.log(str);
		// console.log(arr);
     str.forEach(function(item,i){
		if(item==="-"){
		let newstr=str.slice(1,6);
	console.log(newstr);
	console.log(newstr.reverse());
		}else{
	 
//  console.log(arr);
   }
		 })
		
  }
ReverseNumber(-1,3,5);