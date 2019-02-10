const isInteger=function(n){
		if ((n+"").indexOf(".") > 0) {
				console.log(false);	
		} else {
				console.log(true);
			}
}
isInteger(5.1);