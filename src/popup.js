const loadHaexBtn = document.getElementById("loadhaex");

function GetSiteName(){
  var SiteName = document.getElementById('ctl00_PlaceHolderSiteName_onetidProjectPropertyTitle').innerHTML;
document.getElementById('siteName').innerHTML = SiteName;
}
