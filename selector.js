browser.runtime.onInstalled.addListener(function () {
	browser.runtime.onMessage.addListener(
		function (request, sender, sendResponse) {
			console.log("Request!")
			if (request.message === "get_url") {
				browser.tabs.create({
					"url": request.url
				});
			}
		}
	);

})