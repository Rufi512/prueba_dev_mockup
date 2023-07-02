const collapseAll = () =>{
	const cols = document.querySelectorAll('.faq-quote');
	const arrowIcons = document.querySelectorAll('.arrow');
	const buttons = document.querySelectorAll('.btns');
	[...cols].forEach((el)=>{
		el.style.maxHeight = "0px";
		el.dataset.active = "inactive";
	});

	[...arrowIcons].forEach((el)=>{
		el.style.transform = "rotate(30deg)";
	el.style.transformOrigin = "left center";
	});

	[...buttons].forEach((el)=>{
		el.classList.add('card-header-inactive')
	});
}

const collapse = (e,id, arrow) => {
	const coll = document.getElementById(id);
	const arrowIcon = document.getElementById(arrow);

	if (coll.dataset.active === "inactive") {
		collapseAll()
		e.classList.remove('card-header-inactive')
		coll.style.maxHeight = "1000px";
		coll.dataset.active = "active";
		arrowIcon.style.transform = "rotate(210deg)";
		arrowIcon.style.transformOrigin = "6px 11px";
		return;
	}
	e.classList.add('card-header-inactive')
	coll.style.maxHeight = "0px";
	coll.dataset.active = "inactive";
	arrowIcon.style.transform = "rotate(30deg)";
	arrowIcon.style.transformOrigin = "left center";
};