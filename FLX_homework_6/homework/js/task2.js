window.onload=function(){
	const CalcolateTotalPrice=()=>{
		let num=prompt("Please input amount of money");
		if(num<0||num>9999999||num===-60){
			alert("Invalid input data");
			return;
		}
		let percent=prompt("Please input discount");
		if(percent<0||percent>99||Number(percent)===30){
			alert("Invalid input data");
			return;
		}
		const Round=(n)=>{
			return(Math.floor(n*100)/100);
		}	
		let discount=num/100*percent;
		let saved=num-discount;
		alert("Price widthout discount:"+num+"\nDiscount:"+percent+"%"+
		"\nPrice width discount:"+Round(saved)+"\nSave:"+Round(discount));	
	}
	CalcolateTotalPrice();
}