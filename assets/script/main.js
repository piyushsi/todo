const ul = document.querySelector('ul')
const inputText = document.querySelector('.todo')
let state = JSON.parse(localStorage.getItem('state')) || [];
const selectall = document.querySelector('.selectall')
const editInput = document.createElement('input')
var count= 0;

//renderTodos UI develop function
const renderTodos=(pass) => {
	ul.innerHTML = "";
	pass.forEach(todo => {
		const inputEdit = document.createElement('input')
		inputEdit.className='inputEdit'
		const li =document.createElement('li')
		li.className="insert"   
		const input =document.createElement('input')
		input.type='checkbox'
		input.className="cbox"  
		input.setAttribute('data-id',todo.id)
		input.checked = todo.completed;
		const span =document.createElement('span')
		span.className="list"
		span.textContent = todo.text;
		span.setAttribute('data-id',todo.id)
		const button =document.createElement('button')
		button.className="cross"
		button.textContent='x'
		button.setAttribute('data-id',todo.id)

		const editTodo = (event) => {
			li.replaceChild(editInput,span)
			console.log(event.target.dataset.id)
			if(event.target.dataset.id == todo.id){
				editInput.value = todo.text
				editInput.focus()
				editInput.addEventListener('keyup',(e) => {
					if(e.keyCode == 13){
						todo.text = editInput.value
						renderTodos(state)
					}
				})
				editInput.addEventListener('blur', (e) => {
					todo.text = editInput.value
					renderTodos(state)
				})
			}
		}
		
		li.append(input,span,button)
		ul.append(li)
		inputText.value = ""
		button.addEventListener('click',delTodo)
		input.addEventListener('click',completed)
		const complete=document.querySelector('.completed')
		complete.addEventListener('click',checked)
		const active=document.querySelector('.active')
		active.addEventListener('click',unchecked)
		const all=document.querySelector('.all')
		all.addEventListener('click',total)
		const clear=document.querySelector('.clear')
		clear.addEventListener('click',clearall)
		span.addEventListener('dblclick',editTodo)

	})
	inputText.addEventListener('keyup',addTodo)
	localStorage.setItem('state', JSON.stringify(state));
	items()
}

//add todo function
function addTodo(e){
	if (e.keyCode===13 && inputText.value){
		state.push({
			completed: false,
			id : count++,
			text: inputText.value
		})

		renderTodos(state)
	}
}

//delete todo function
function delTodo(e){
	state = state.filter(a => a.id != e.target.dataset.id)
	renderTodos(state)
}

//all completed
function completed(e){
	state=state.filter(val=>{
		if(val.id==e.target.dataset.id){
			val.completed = !val.completed;
		}
		return state

	})
	renderTodos(state)
}


function checked(){
	arr=[];
	state.forEach(v=>{
		if (v.completed){
			arr.push(v)
		}})
	renderTodos(arr)
}


function unchecked(){
	arr1=[];
	state.forEach(v=>{
		if (v.completed==false){
			arr1.push(v)
		}})
	renderTodos(arr1)

}


function clearall(){
	arr2=[];    
	state.forEach(v=>{
		if (v.completed==false){
			arr2.push(v)
		}})
	state=arr2
	renderTodos(state)
}

//items remaining function
function items(){
	arr2=[];    
	state.forEach(v=>{
		if (v.completed==false){
			arr2.push(v)
		}})
	const count=document.querySelector('.count')
	const subcount=document.querySelector('.subcount')
	count.textContent=arr2.length
	if(arr2.length>1){
		subcount.textContent=" items left"
	}
	else {
		subcount.textContent=" item left"
	}
}

function total(){
	renderTodos(state)
}

renderTodos(state)




// function selectedall(){
// arr3=state.map(v=>{
//  if(v.completed==false){
// v.completed=true
//  }
// else if (v.completed==true){
//  v.completed=true
// }})

// arr4=state.map(v=>{
//  if(v.completed==true){
// v.completed=false
//  }})
// if(state=arr3){
//  state=arr4
// }
// else {
//  state=arr3
// }
// renderTodos(state)
// }
// selectall.addEventListener('click',selectedall)






