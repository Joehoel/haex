const loadHaexBtn = document.getElementById("loadhaex");

function getSiteName() {
  const siteName = document.getElementById('ctl00_PlaceHolderSiteName_onetidProjectPropertyTitle').innerHTML;
  document.getElementById('siteName').innerHTML = siteName;
}
