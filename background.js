chrome.browserAction.onClicked.addListener(function(tab) {
  chrome.tabs.sendMessage(tab.id,{"action":"animation"});
});


chrome.runtime.onMessage.addListener(function (msg,sender) {
  if (msg["action"] == "close window") {
    chrome.tabs.remove(sender.tab.id);
  }
})
