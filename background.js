chrome.browserAction.onClicked.addListener(function(tab) {
  chrome.tabs.executeScript({
    file: 'index.js'
  }, function (timer) {
    setTimeout(function () {
      chrome.tabs.remove(tab.id);
    },timer);
  });
});
