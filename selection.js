document.onselectionchange = function () {
	document.getSelection();
	var selection = window.getSelection();
	if (selection.rangeCount > 0) {
		console.log(selection.toString());
	};
};