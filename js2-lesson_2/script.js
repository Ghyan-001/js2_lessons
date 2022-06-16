const input = document.querySelector('.todo__list__form--input')
const addBtn = document.querySelector('.todo__list__form--btn')
const listContainer = document.querySelector('.todo__list__items')


addBtn.addEventListener('click', createTodo)

function removeTodo() {
	const listParent = this.parentElement.parentElement
	listContainer.removeChild(listParent)

}
function doneTodo() {
	const listParent = this.parentElement.parentElement
	listParent.classList.toggle('done')
}


function setActionsEvents() {
	const deleteBtns = document.querySelectorAll('.todo__list__items__row--remove')
	const doneBtns = document.querySelectorAll('.todo__list__items__row--done')

	deleteBtns.forEach(function (btn) {
		btn.addEventListener('click', removeTodo)
	})
	doneBtns.forEach(function (btn) {
		btn.addEventListener('click', doneTodo)
	})


}


function createTodo() {
	if (input.value.length < 3) {
		return alert('Miqich erkar ban gri')
	}
	listContainer.innerHTML += `
		<li class="todo__list__items__row">
			<span class="todo__list__items__row--content">
				${input.value}
			</span>
			<div>
				<button class="todo__list__items__row--done"> Done </button>
				<button class="todo__list__items__row--remove"> X </button>
			</div>
		</li>
	`
	input.value = ""

	setActionsEvents()



}