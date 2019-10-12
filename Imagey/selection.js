
document.addEventListener('dblclick',()=>{
    var myhref = "https://github.com/Destroyerrrocket/ImageFinderExtension/blob/master/selection.js";


    var selected = window.getSelection.toString();
    if(selected.length > 0){
    
        console.log(selected.toUpperCase());
        var text = "";
        selected = "formatted";
        var query = text.concat("https://google.com/", selected);
        
        chrome.runtime.sendMessage({"message": "get_url", "url": query});
    }
    

});
