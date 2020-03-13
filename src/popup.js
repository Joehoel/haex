const loadHaexBtn = document.getElementById("loadhaex");

chrome.tabs.query({'active': true, 'lastFocusedWindow': true}, function (tabs) {
  const url = tabs[0].url;
  document.getElementById('siteName').innerHTML = url;
});