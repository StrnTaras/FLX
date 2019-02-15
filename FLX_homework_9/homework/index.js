let data=[
	{
		"_id": "5b5e3168c6bf40f2c1235cd6",
		"index": 0,
		"age": 39,
		"eyeColor": "green",
		"name": "Stein",
		"favoriteFruit": "apple"
	},
	{
		"_id": "5b5e3168e328c0d72e4f27d8",
		"index": 1,
		"age": 38,
		"eyeColor": "blue",
		"name": "Cortez",
		"favoriteFruit": "strawberry"
	},
	{
		"_id": "5b5e3168cc79132b631c666a",
		"index": 2,
		"age": 2,
		"eyeColor": "blue",
		"name": "Suzette",
		"favoriteFruit": "apple"
	},
	{
		"_id": "5b5e31682093adcc6cd0dde5",
		"index": 3,
		"age": 19,
		"eyeColor": "green",
		"name": "George",
		"favoriteFruit": "banana"
	}
];
//.1 Write function, which returns types of passed parameters (one and more parameters).
const FindTypes=function(){
	let masArg=[];
for(let i=0;i<arguments.length;i++){
	masArg.push(typeof(arguments[i]));
}
 return console.log(masArg);
}
FindTypes(null, 5, "hello");

 
//. Write function, which returns types of passed parameters (one and more parameters).
const ExecuteforEach=function(arr,F){ 
				for(let i=0;i<arr.length;i++){
						F(arr[i]);		
						}	
					}
	ExecuteforEach([1,2,3],function(el){
		console.log(el)
	})

//3. Write function, which returns transformed array based on function, which passed as a parameter.
// Reuse function from task 2. returns [5, 8, 11]

const MapArray=function(arr,F){
			let m=[];
			ExecuteforEach(arr,function(el){
				m.push(F(el)) //пушимо результат що повертає функція F
			})	 
		console.log(m);		
		return m;
		}
MapArray([2, 5, 8],function(el) {
	return el + 3;
		})


//4. Write function, which returns filtered array based on function, which passed as a parameter. 
//Reuse function from task 2.

const filterArray=function(arr,F){ 
			let m=[];				
			ExecuteforEach(arr,function(el){
			if(F(el)){
				m.push(el)
			}
			})	
			console.log(m);
		}
filterArray([2, 5, 8], function(el) {
	return el > 3;
	}) // returns [5, 8]

	//5.Write function, which returns amount of people, who are over 18. Reuse function from task 4
		//// returns 3
				const getAmountOfAdultPeople=function(obj){ 

					filterArray(obj,function(el) { 
						return el.age>18
				})
					}												
			getAmountOfAdultPeople(data);

//6.Write function, which returns array of names of people, who are over 18 , 
//their favorite fruit is banana and their eye color is green. Reuse functions from task 3 and 4.

    const getGreenAdultBananaLovers=function(obj){
    filterArray(MapArray(obj,function(el){
							if(el.eyeColor==="green" && el.favoriteFruit==="banana"){	
								return el.name
							}
						}),function(el){
							return el
						});
			}														
			getGreenAdultBananaLovers(data) // returns [‘George]
		

//  7. Write function, which returns array of keys of an object.
  // returns [“keyOne”, “keyTwo”, “keyThree”]
 
 const Keys=function(obj){
	let m=[];
       for(let keys in obj){
            m.push(keys);
			}
			console.log(m)
 }
 Keys([1, 2, 3]);
//8. Write function, which returns array of values of an object.8 
 // returns [1, 2, 3]

	const Values=function(obj){
		let m=[];
        for(let prop in obj){
					if(!obj.hasOwnProperty(prop)) {
						continue;
					}
             m.push(obj[prop]);			
				} 
				console.log(m);
	}
	Values({keyOne: 1, keyTwo: 2, keyThree: 3})

//	9. Write function, which returns formatted date.
	//showFormattedDate(new Date('2019-01-27T01:10:00')) // returns ‘Date: 27 of Jan, 2019’
  //  every month should be showed as 3 letters (e.g. Feb, Apr or Dec)

const showFormattedDate=function(date){
	let month='';
	let mas=["Jan","Feb","Mar","Apr","May","June","July","Aug","Sept","Oct","Nov","Dec"];
	for(let i=0;i<mas.length;i++){
		if (i===date.getMonth()){
				month=mas[i];		
		}
	}
	let text=`Date: ${date.getDate()} of  ${month}, ${date.getFullYear()}`; 	
console.log(text)
}
showFormattedDate(new Date('2019-01-27T01:10:00'));

//10. Write function, which returns true if Year is even, otherwise returns false
//isEvenYear(new Date('2019-01-27T01:10:00')) // false
  const isEvenYear=function(date){
      return console.log(date.getFullYear()%2===0);
	}
	isEvenYear(new Date('2019-01-27T01:10:00'))

//	11. Write function, which returns true if Month is even, otherwise returns false
const IsEvenMonth=function(date){	
	return console.log(date.getMonth()%2!==0);
}
IsEvenMonth(new Date('2019-02-27T01:10:00')) // true

