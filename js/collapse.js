const collapse = (id, arrow) => {
	const coll = document.getElementById(id);
	const arrowIcon = document.getElementById(arrow);

	if (coll.dataset.active === "inactive") {
		coll.style.maxHeight = "1000px";
		coll.dataset.active = "active";
		arrowIcon.style.transform = "rotate(210deg)";
		arrowIcon.style.transformOrigin = "6px 11px";
		return;
	}

	coll.style.maxHeight = "0px";
	coll.dataset.active = "inactive";
	arrowIcon.style.transform = "rotate(30deg)";
	arrowIcon.style.transformOrigin = "left center";
};