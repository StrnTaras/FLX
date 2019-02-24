window.onload=function(){
	let propInput;
	let count=-1;
	let rootNode = document.getElementById('root');
	let header=document.createElement('div');
			header.setAttribute('class','head');
			rootNode.appendChild(header);
	let chapter=document.createElement('h1');
			chapter.innerText='TODO Cat List';
			header.appendChild(chapter);
	let input=document.createElement('input');
			input.setAttribute('type','text');
			header.appendChild(input);
	let btnPlus=document.createElement('input');
			btnPlus.setAttribute('type','button');
			header.appendChild(btnPlus);
			btnPlus.setAttribute('value','+');
		let horLine=document.createElement('hr');
				horLine.setAttribute('class','accrosline');
				rootNode.appendChild(horLine);
		let container=document.createElement('div');
				rootNode.appendChild(container);
				container.setAttribute('class','container');
		let catPav=document.createElement('img');
				catPav.setAttribute('src','./assets/img/cat.png');
				catPav.setAttribute('alt','photoCatPav');
				container.appendChild(catPav);
		let ul=document.createElement('ul');
				container.appendChild(ul);		    
	function addList(){	
					const arr=[];		
					if(!input.value){
						return
					}else{
						arr.push(input.value);	
						console.log(arr);					
					}
					let ii=document.createElement('i');
							ii.setAttribute('class','material-icons');
							ii.innerHTML='delete';
			for(let i=0;i<=arr.length;i++){	
			if(i<arr.length){
			let ch=document.createElement('i');
					ch.setAttribute('class','material-icons');
					ch.innerHTML='check_box_outline_blank';
			let chTrue=document.createElement('i');	
					chTrue.setAttribute('class','material-icons');
					chTrue.innerHTML='check_box';
			let cont=document.createElement('div');
					cont.appendChild(ch);
					cont.setAttribute('class','cont');
					cont.onclick=function(){
           let num=0;
				if(this.childNodes[num].nodeValue==='check_box_outline_blank'){
							this.replaceChild(chTrue,this.childNodes[num]);		
							}	else if(this.childNodes[num].nodeValue==='check_box'){
							console.log(this)
							this.replaceChild(ch,this.childNodes[num]);
						}
						}				
			let li=document.createElement('li');
				li.setAttribute('class','listItems');
			let wrapper=document.createElement('div');
					wrapper.setAttribute('class','wrapper');		
					ul.appendChild(li);				
					wrapper.innerText=arr[i];
					li.appendChild(wrapper);		
					li.appendChild(ii);
					li.insertBefore(cont,wrapper);

	
					li.onmousedown=function(){
						if (li.previsousSibling) {
							li.parentNode.insertBefore(li, li.previousSibling);
					}
						}				
				}	
						ii.onclick=function(){
							let el=this.parentNode;
							ul.removeChild(el);
							count--;
							let ten=10;
							let one=1;
							if(count<ten&&count>=one){
								btnPlus.removeAttribute('class');
								propInput.disabled=false;							
							}
						}			
					}	
				input.value='';					
			}	
		btnPlus.onclick=function(){
			let eleven=9;
			if(count===Number(eleven)){
				this.setAttribute('class','visible');
			let m=document.querySelectorAll('div.head input[type=text]');
		for(let i=0;i<m.length;i++){
					propInput=m[i];
					console.log(propInput.disabled=true);
				}
				alert('Maximum item per list are created');	
				input.value='';
				return
					}	else{
						if(input.value){
							addList(); 
							count++;
							console.log(count);		
						}			
					}	
				
			}		
			} 
		
			
		


			


  


