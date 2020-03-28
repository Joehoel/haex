const imgUrl = document.getElementById("imageUrl");
const resetBtn = document.getElementById("resetBtn");
const saveBtn = document.getElementById("saveBtn");
const status = document.getElementById("saveStatus");

//Verander de placeholder door de huidige afbeelding
chrome.storage.sync.get(["imagehackUrl"], function(result) {
  if (result.imagehackUrl === "") {
    imgUrl.placeholder = "Using default image";
  } else {
    imgUrl.placeholder = result.imagehackUrl;
  }
});

//Check of er op 'save' of 'reset' wordt geklikt
saveBtn.addEventListener("click", saveSettings);
resetBtn.addEventListener("click", resetSettings);

//Sla dan de instellingen op...
function saveSettings() {
  const imagehackUrl = imgUrl.value;
  //Kijk of de value leeg is
  if (!imagehackUrl === "") {
    //Alle instellingen worden opgeslagen in chrome.storage
    chrome.storage.sync.set(
      {
        imagehackUrl: imagehackUrl
      },
      function() {
        //Satus moet geupdated worden om te laten zien dat de instellingen zijn opgeslagen
        status.textContent = "Options saved.";
        setTimeout(() => {
          status.textContent = "";
          location.reload();
        }, 750);
      }
    );
  }
}

//Reset dan de instellingen
function resetSettings() {
  //Alle default instellingen worden opgeslagen in chrome.storage
  chrome.storage.sync.set(
    {
      imagehackUrl:
        "https://media.tenor.com/images/7c37724f05ed6d2272d1eaa00d0b06a9/tenor.gif"
    },
    () => {
      //Satus moet geupdated worden om te laten zien dat de instellingen zijn gereset
      status.textContent = "Options reset.";
      setTimeout(() => {
        status.textContent = "";
        location.reload();
      }, 750);
    }
  );
}
