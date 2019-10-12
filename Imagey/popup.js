let changeColor = document.getElementById('changeColor');

changeColor.addEventListener('dblclick',f);

var f = function(){
    console.log("dblclicked");
    console.log(window.getSelection().toString());
}

chrome.storage.sync.get('color', function(data){
    changeColor.style.background  = data.color;
    changeColor.setAttribute('value', data.color);
});       
changeColor.onclick = function(element) {
    let color = element.target.value;
    chrome.tabs.query({active: true, currentWindow: true}, function(tabs) {
      chrome.tabs.executeScript(
          tabs[0].id,
          {code: 'document.body.style.backgroundColor = "' + color + '";'});
    });
  };