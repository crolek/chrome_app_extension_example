var extensionId = "hpeobgpcooikgohlmdjflcengankgehf";


function catify() {
    //Squigglify
    document.querySelector(".video-block").innerHTML = '<img src="chrome-extension://hpeobgpcooikgohlmdjflcengankgehf/images/buddy-sleep.jpg" style="width: 100%; height: 100%"><div id="people-wrapper"> <div class="call-action"> <p>Where cuteness meets amazing technology</p> <a href="http://info.pillartechnology.com/connect" alt="Contact Us"> <button class="call-action-button">TECHNOLOGY</button> </a> </div> </div>';
}


chrome.runtime.onMessage.addListener(function(message, sender){
    console.log("Content-script Message: ", message);
    console.log("Content-script Sender: ", sender);
    if (message.catify) {
        catify()
    }
});

//because dsmjs.com needs cats :)
if (window.location.host === "dsmjs.com") {
    document.querySelector(".header-title img").setAttribute("src", "chrome-extension://" + extensionId + "/images/buddy-sleep.jpg")
}


console.log("Content script loaded on this domain");