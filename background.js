// background.js

chrome.runtime.onInstalled.addListener(function () {
  chrome.contextMenus.create({
    title: "Shorten URL",
    contexts: ["link"],
    id: "shorten-url",
  });
});

chrome.contextMenus.onClicked.addListener((info, tab) => {
  if (info.menuItemId == "shorten-url") {
    chrome.storage.local.set({ currentURL: info.linkUrl });
    chrome.scripting.executeScript({
      target: { tabId: tab.id },
      files: ["content.js"],
    });
  }
});

chrome.action.onClicked.addListener(async (tab) => {
  chrome.storage.local.set({ currentURL: null });
  chrome.scripting.executeScript({
    target: { tabId: tab.id },
    files: ["content.js"],
  });
});
