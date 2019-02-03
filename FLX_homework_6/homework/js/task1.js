window.onload=function(){
	function QuadraticEquation (){
let a=prompt("а = ");
if(isNaN((Number(a)))||a===0||a===""){
	alert("Invalid input data");
	return;
}
let b=prompt("b = ");
if(isNaN((Number(b)))||b===""){
	alert("Invalid input data");
}
let c=prompt("c = ");
if(isNaN((Number(c)))||c===""){
	alert("Invalid input data");
}
let D=b*b-4*a*c;
if(D>0){
let	x1=(-b+Math.sqrt(D))/(2*a);
let	x2=(-b-Math.sqrt(D))/(2*a);
alert("X1= "+x1+ "\n Х2= "+x2);
} else if(D===0) {
let x1=-b/(2*a);
alert("X1= "+x1);
} else if (D<0){
alert("no solution");
    }
	}
	QuadraticEquation();
}

