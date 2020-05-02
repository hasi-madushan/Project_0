const classNames = {
  TODO_ITEM: 'todo-container',
  TODO_CHECKBOX: 'todo-checkbox',
  TODO_TEXT: 'todo-text',
  TODO_DELETE: 'todo-delete',
  TODO_BUTTON: 'button',
}

const list = document.getElementById('todo-list')
const itemCountSpan = document.getElementById('item-count')
const uncheckedCountSpan = document.getElementById('unchecked-count')

function newTodo() {
	const todoValue = prompt("Enter Your TODO Contain : ")
	let li_element = document.createElement('li')
	li_element.setAttribute('class', classNames.TODO_ITEM)	
	if (todoValue.length === 0) {
		alert('please enter Item')
		return false;
	} else {
		text_value = document.createTextNode(todoValue)
		li_element.appendChild(text_value)
	}
	const span_element = document.createElement('span')
	span_element.setAttribute('class', classNames.TODO_TEXT)
	li_element.appendChild(span_element)
	const delete_button = document.createElement('button')
	delete_button.setAttribute('class', classNames.TODO_DELETE)
	delete_button.innerHTML = 'Delete'
	delete_button.setAttribute('style','textAlign',"right")
	span_element.appendChild(delete_button)
	const checkbox_element = document.createElement('input')
	checkbox_element.setAttribute('type', 'checkbox')
	checkbox_element.setAttribute('class', classNames.TODO_CHECKBOX)
	li_element.appendChild(checkbox_element)
	
	list.appendChild(li_element)
	
	increaseToDoCount()
	
	increaseUnchekedCount()
	
	checkbox_element.addEventListener( 'change', function() {
		if(this.checked) {
			decreaseUnchekedCount()
		} else {
			increaseUnchekedCount()
		}
	});
	
	delete_button.addEventListener( 'click', function() {
			decreaseUnchekedCount()
			decreaseToDoCount()
			span_element.parentElement.remove();
	});
	
}

function increaseToDoCount(){
	let val = itemCountSpan.innerHTML
	val ++
	itemCountSpan.innerHTML = val
}

function decreaseToDoCount(){
	let val = itemCountSpan.innerHTML
	val --
	itemCountSpan.innerHTML = val
}

function increaseUnchekedCount(){
	let val = uncheckedCountSpan.innerHTML
	val ++
	uncheckedCountSpan.innerHTML = val
}

function decreaseUnchekedCount(){
	let val = uncheckedCountSpan.innerHTML
	val --
	uncheckedCountSpan.innerHTML = val
}
