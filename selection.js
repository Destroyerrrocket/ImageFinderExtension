f = function () {
	var selection = window.getSelection();
	if (selection.rangeCount > 0) {
		console.log(selection.toString());
	};
}

document.addEventListener('dblclick', f);