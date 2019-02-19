const userCard=function(index){  
	let date=new Date();
	let from=1;
	let three=3;
	if(index<from||index>three){
		return
	}
	const card={
		key:index,
		balance:100,
		transactionLimit:100,
		historyLogs:[]
	};
			return {
		getCardOptions:function(item){
			card.historyLogs.push(item);
				return card; 
								},
								putCredits:function(putAmount){
											card.balance+=putAmount;
											let obj={operationType:'Ricived credits',
											credits:putAmount,
											operationTime:date
										};
											this.getCardOptions(obj);
								},
								takeCredits:function(takeAmount){
			if(card.balance<takeAmount){
											console.error(`Your balance is mutch lower ${card.balance} 
											like credit you want to take ${takeAmount}`);
									}else if(card.transactionLimit<takeAmount){
											console.error(`Your Transaction Limit ${card.transactionLimit} 
											is exhausted`);
									}else{
												card.balance-=takeAmount;
												let obj={operationType:'Withdrawal of credits',
												credits:takeAmount,
												operationTime:date
											};
												this.getCardOptions(obj);
								}							
								},
								setTransactionLimit:function(limit){							 
											card.transactionLimit=limit;
											let obj={operationType:'Transaction limit change',
											credits:limit,
											operationTime:date
										};
											this.getCardOptions(obj);
								},
 transferCredits:function(credits,receiver){
								let hundred=100;
								let pices=5;
								let tax=credits/hundred*pices;
								receiver.putCredits(credits);
								this.takeCredits(credits+tax);
								}
							}	
						}
						class UserAccountnew {
							constructor(name){
								this.name=name;
								this.cards=[];
							}
							addCard(){
							let three=3;
								if(this.cards.length<=three){
									this.cards.push(userCard(this.cards.length+1));					
								}else{
									console.error('Limit cards  is exhausted')
								}
						
							}
							getCardByKey(number){
                  return this.cards[number];
							}					
						}
					

	