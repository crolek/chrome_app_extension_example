var extensionId = "hpeobgpcooikgohlmdjflcengankgehf";


function catify() {
    //hero
    document.querySelector("#layer_slider_1").innerHTML = "<img src='chrome-extension://" + extensionId + "/images/buddy-sleep.jpg' style='width: 100%; height: 100%' />";
    //logo
    document.querySelector("#header_main").querySelector("img").setAttribute("src", "chrome-extension://" + extensionId + "/images/cat-allies.png")
}


chrome.runtime.onMessage.addListener(function(message, sender){
    console.log("Content-script Message: ", message);
    console.log("Content-script Sender: ", sender);
    if (message.catify) {
        catify()
    }
})
