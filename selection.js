f = function () {
	var selection = window.getSelection();
	if (selection.rangeCount > 0) {
		console.log(selection.toString())
		var xmlhttp = new XMLHttpRequest();
		xmlhttp.onreadystatechange = function () {
			if (this.readyState == 4 && this.status == 200) {
				var jsonData = JSON.parse(this.responseText);
				console.log(jsonData)
				if (jsonData.items.length > 0) {
					browser.runtime.sendMessage({
						"message": "get_url",
						"url": jsonData.items[0].link
					});
				}
			}
		}
		xmlhttp.open("GET", browser.extension.getURL('apple.json'), true);
		xmlhttp.send();
	}
};

document.addEventListener('dblclick', f);