var funcToInject = function () {
	var selection = window.getSelection();
	return (selection.rangeCount > 0) ? selection.toString() : '';
};

var jsCodeStr = ';(' + funcToInject + ')();';

browser.commands.onCommand.addListener(function (cmd) {
	if (cmd === 'selected-text') {
		/* Inject the code into all frames of the active tab */
		browser.tabs.executeScript({
			code: jsCodeStr,
			allFrames: true //  <-- inject into all frames, as the selection
			//      might be in an iframe, not the main page
		}, function (selectedTextPerFrame) {
			if (browser.runtime.lastError) {
				/* Report any error */
				console.log('ERROR:\n' + browser.runtime.lastError.message);
			}
			if ((selectedTextPerFrame.length > 0) &&
				(typeof (selectedTextPerFrame[0]) === 'string')) {
				/* The results are as expected */
				var alertWindow = 'alert("Selected text: ' +
					selectedTextPerFrame[0].replace(/\n/g, " ") +
					'")';
				console.log(alertWindow)
				browser.tabs.executeScript({
					code: alertWindow
				});
			}
		});
	}
});