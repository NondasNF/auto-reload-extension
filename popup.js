document.addEventListener('DOMContentLoaded', () => {
  const toggleReload = document.getElementById('toggle-reload');
  const reloadNowButton = document.getElementById('reload-now');

  chrome.tabs.query({active: true, currentWindow: true}, (tabs) => {
    const url = tabs[0].url;

    chrome.storage.local.get([url], (result) => {
      toggleReload.checked = result[url] || false;
    });

    toggleReload.addEventListener('change', () => {
      chrome.storage.local.set({[url]: toggleReload.checked});
    });

    reloadNowButton.addEventListener('click', () => {
      chrome.tabs.reload();
    });
  });
});
