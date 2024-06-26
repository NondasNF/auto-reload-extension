chrome.runtime.onInstalled.addListener(() => {
  setInterval(() => {
    chrome.tabs.query({active: true, currentWindow: true}, (tabs) => {
      if (tabs[0]) {
        chrome.storage.local.get([tabs[0].url], async (result) => {
          console.log(result[tabs[0]])
          console.log(result[tabs[0].url])
          if (result[tabs[0].url]) {
            chrome.tabs.reload();
          }
        })
      }
    });
  }, 300000);
});
