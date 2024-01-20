// background.js

chrome.runtime.onInstalled.addListener(function () {
  chrome.contextMenus.create({
    title: "Shorten URL",
    contexts: ["link"],
    id: "shorten-url",
  });
});

chrome.contextMenus.onClicked.addListener((info, tab) => {
  if (info.menuItemId == "shorten-url"){
    chrome.scripting.executeScript({
      target: { tabId: tab.id },
      files: ["content.js"],
    });
  }
});

chrome.action.onClicked.addListener(async (tab) => {
  chrome.scripting.executeScript({
    target: { tabId: tab.id },
    files: ["content.js"],
  });
});
