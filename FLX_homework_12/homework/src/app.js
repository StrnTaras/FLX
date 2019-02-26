const rootNode = document.getElementById('root');

const todoItems = [
    {isDone: false, id: 12345, description: 'Todo 1'}
];

let head=document.createElement('h1');
    head.innerHTML='Simple TODO aplication';
    rootNode.appendChild( head);
let btnAdd=document.createElement('input');
    btnAdd.setAttribute('type','button');
    btnAdd.setAttribute('value','Add new task');    
		rootNode.appendChild(btnAdd);
let subhead=document.createElement('p');
		subhead.innerText='TODO is empty';
		rootNode.appendChild(subhead);

		btnAdd.onclick=function(){
			
			let divwrap=document.getElementsByClassName('wrapforbtn')[null];
			if(divwrap){
				return
			}
			location.hash = '/add';
			head.innerHTML='Add Task';
			btnAdd=document.createElement('input');
			this.removeAttribute('button');
			this.removeAttribute('value');
			this.setAttribute('type','text');
			subhead.innerText='';

	const createBtn= () => {
				let wrapper=document.createElement('div');
						wrapper.setAttribute('class','wrapforbtn');
				let btnCenc=document.createElement('input');
						btnCenc.setAttribute('type','button');	
						btnCenc.setAttribute('value','Cancle');
						wrapper.appendChild(btnCenc);	  	
				let btnSave=document.createElement('input');
						btnSave.setAttribute('type','button');	
						btnSave.setAttribute('value','Save Changes');
						wrapper.appendChild(btnSave);	
						rootNode.appendChild(wrapper);	
				btnSave.onclick= () => {
				if(!this.value){
					return
				}else{
			const arr=new Array();
			arr.push(this.value);
		console.log(arr)
		let ii=document.createElement('i');
		ii.setAttribute('class','material-icons');
		ii.innerHTML='delete';
for(let i=0;i<=arr.length;i++){	
			let ch=document.createElement('i');
			ch.setAttribute('class','material-icons');
			ch.innerHTML='check_box_outline_blank';
			let chTrue=document.createElement('i');	
			chTrue.setAttribute('class','material-icons');
			chTrue.innerHTML='check_box';
			let cont=document.createElement('div');
			cont.appendChild(ch);
			cont.setAttribute('class','cont');
					}
				}
		this.value='';			
				}			
			}
			createBtn();

		}
		
		


			