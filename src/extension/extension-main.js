var appId = "mfnpjdefoieghfkdilkaninlealillfa";
var urlToTarget = "*://pillartechnology.com/*";


function sendToContentScript(message) {
    chrome.tabs.query({
        url: urlToTarget,
    }, function(tabs){
        if (tabs.length != 1) {
            console.error("To many tabs")
        }
        chrome.tabs.sendMessage(tabs[0].id, {
            message: message,
            catify: true
        })
    })
}

chrome.runtime.onMessageExternal.addListener(function(message, sender) {
    console.log("Extension-main Message: ", message);
    console.log("Extension-main Sender: ", sender);
    if (message.includes("background")) {
        sendToContentScript(message)    
    }
});
