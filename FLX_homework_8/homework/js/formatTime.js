const FormatTime=function(){
	let hour;
	let mins;
	let numbers;
	let days;
	if(arguments[0]<60){
		console.log('0 day(s) 0 hour(s) ' +arguments[0]+ ' minute(s)');
	}else if(arguments[0]>=60&&arguments[0]<1440){
							numbers=arguments[0];
							hour=numbers/60;
							mins=numbers%60;
			console.log('0 day(s) '+Math.floor(hour)+' hour(s) '+mins+' minute(s) ');	
	}else if(arguments[0]>=1440){
						numbers=arguments[0];
						days=numbers/1440;
						mins=numbers%1440;
				if(mins<60){
						hour=0;
				}else{					
					hour=mins/60;
					mins=mins%60;
				}
					console.log(Math.floor(days)+' day(s) '+Math.floor(hour)+ ' hour(s) '+mins+' minute(s)');	
			}
  }
FormatTime(59);