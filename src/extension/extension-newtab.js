document.querySelector("#newTab").addEventListener("click", function() {
    chrome.tabs.create({
        url: "http://dsmjs.com"
    })
})