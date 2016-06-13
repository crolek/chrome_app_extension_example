var extensionId = "hpeobgpcooikgohlmdjflcengankgehf";

function sendMessageToBackgroundScript(message) {
    chrome.runtime.getBackgroundPage(function (backgroundPage) {
        backgroundPage.sendToExtension(message);
    });
}

function sendMessageDirectlyToExtension(message) {
    chrome.runtime.sendMessage(extensionId, message + "____direct")
}

$(function(){
    $("#sendMessage").on("click", function(){
        var message = $("#messageToSend").val();
        console.log("sending \"" + message + "\" to the Extension");
        sendMessageToBackgroundScript(message);
        sendMessageDirectlyToExtension(message)
    });
});

