chrome.runtime.onInstalled.addListener(function () {
    chrome.storage.sync.set({ color: "#3aa757" }, function () {
        console.log("The color is green.");
    });
    chrome.declarativeContent.onPageChanged.removeRules(undefined, function () {
        chrome.declarativeContent.onPageChanged.addRules([{
            conditions: [new chrome.declarativeContent.PageStateMatcher({
                pageUrl: { hostEquals: 'www.google.com', schemes: ['https'] },
            })
            ],
            actions: [new chrome.declarativeContent.ShowPageAction()]
        }]);
    });
    chrome.runtime.onMessage.addListener(
        function(request, sender, sendResponse) {
          if( request.message === "get_url" ) {
            chrome.tabs.create({"url": request.url});
          }
        }
      );
});