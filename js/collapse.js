const collapseAll = () =>{
	const card = document.querySelectorAll('.card-ac');
	[...card].forEach((el)=>{
		el.classList.remove('card-active')
		el.dataset.active = 'inactive'
		el.classList.add('card-inactive')
	})
}

const collapse = (id) => {
	const card = document.getElementById(id);
	if (card.dataset.active === "inactive") {
		collapseAll()
		card.dataset.active = 'active'
		card.classList.add('card-active')
		card.classList.remove('card-inactive')
		return
	}
	card.dataset.active = 'inactive'
	card.classList.remove('card-active')
	card.classList.add('card-inactive')

};