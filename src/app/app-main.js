var extensionId = "hpeobgpcooikgohlmdjflcengankgehf";

console.log("App code has been loaded, but not launched");

chrome.app.runtime.onLaunched.addListener(function() {
    console.log("App has launched")
    
    chrome.app.window.create("app-window.html",
        {
            id: "exampleChromeAppWindow",
            innerBounds: {
                width: 360,
                height: 300,
                left: 600,
                minWidth: 220,
                minHeight: 220
            }
        }
    );
});


function sendToExtension(message) {
    console.log("sending.... ", message)
    chrome.runtime.sendMessage(extensionId, message + "____background")
}

