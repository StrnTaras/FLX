 
			let login=prompt("Please input your login");
			if(!login||login===''){
				alert("Canceled"); 
			} else if(login.length<4){
        alert("I don't know any users having name length less than 4 symbols");
			}else if(login!=="User"&&login!=="Admin"){
				alert("I don’t know you");
			}else{
				let password=prompt("Please input your password!");
				if(password===""){
					alert("Canceled");
				}else{
					let hourIs=new Date().getHours();
					if(login==="User"&&password==="UserPass"){
                if(hourIs<20){
									alert("Good day, dear User!");
								}else{
									alert("Good evening, dear User!");
								}            
					}else if(login==="Admin"&&password==="RootPass"){
								if(hourIs<20){
									alert("Good day, dear Admin!");
								}else{
									alert("Good evening, dear Admin!");
						}
					}else{
						alert("Wrong password");
					}
				}
			}