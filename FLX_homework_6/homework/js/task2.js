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
		let discount=num/100*percent;
		let saved=num-discount;
		alert("Price widthout discount:"+num+"\nDiscount:"+discount+"%"+
		"\nPrice width discount:"+saved+"\nSave:"+discount);
	
	let number=2.1578746;
	const Round=(n)=>{
		alert(Math.floor(n*100)/100);
	}
	Round(0.00123);
	
	}
	CalcolateTotalPrice();
}