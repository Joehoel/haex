//Check of er op 'save' wordt geklikt
chrome.storage.sync.get(['imageUrl'], function(result) { 
    document.getElementById('imageUrl').placeholder = result.imageUrl;
});
document.getElementById('saveBtn').addEventListener('click', saveSettings);
document.getElementById('resetBtn').addEventListener('click', resetSettings);

//Sla dan de instellingen op...
function saveSettings() {
    var imageUrl = document.getElementById('imageUrl').value;
    //Alle instellingen worden opgeslagen in chrome.storage
    chrome.storage.sync.set({
        imageUrl: imageUrl
    }, function() {
        //Satus moet geupdated worden om te laten zien dat de instellingen zijn opgeslagen
        var status = document.getElementById('saveStatus');
        status.textContent = 'Options saved.';
        setTimeout(function() {
            status.textContent = '';
        }, 750);
    });
}

//Reset dan de instellingen
function saveSettings() {
    //Alle default instellingen worden opgeslagen in chrome.storage
    chrome.storage.sync.set({
        imageUrl: 'https://media.tenor.com/images/7c37724f05ed6d2272d1eaa00d0b06a9/tenor.gif'
    }, function() {
        //Satus moet geupdated worden om te laten zien dat de instellingen zijn gereset
        var status = document.getElementById('saveStatus');
        status.textContent = 'Options reset.';
        setTimeout(function() {
            status.textContent = '';
        }, 750);
    });
}