//Verander de placeholder door de huidige afbeelding
chrome.storage.sync.get(['imagehackUrl'], function(result) {
    if(result.imagehackUrl === '') {
        document.getElementById('imageUrl').placeholder = 'Using default image';
    } else {
        document.getElementById('imageUrl').placeholder = result.imagehackUrl;
    }
});

//Check of er op 'save' of 'reset' wordt geklikt
document.getElementById('saveBtn').addEventListener('click', saveSettings);
document.getElementById('resetBtn').addEventListener('click', resetSettings);

//Sla dan de instellingen op...
function saveSettings() {
    var imagehackUrl = document.getElementById('imageUrl').value;
    //Kijk of de value leeg is
    if(imagehackUrl === '') {
        //Dan niets
    } else {
        //Alle instellingen worden opgeslagen in chrome.storage
        chrome.storage.sync.set({
            imagehackUrl: imagehackUrl
        }, function() {
            //Satus moet geupdated worden om te laten zien dat de instellingen zijn opgeslagen
            var status = document.getElementById('saveStatus');
            status.textContent = 'Options saved.';
            setTimeout(function() {
                status.textContent = '';
                location.reload();
            }, 750);
        });
    }
}

//Reset dan de instellingen
function resetSettings() {
    //Alle default instellingen worden opgeslagen in chrome.storage
    chrome.storage.sync.set({
        imagehackUrl: 'https://media.tenor.com/images/7c37724f05ed6d2272d1eaa00d0b06a9/tenor.gif'
    }, function() {
        //Satus moet geupdated worden om te laten zien dat de instellingen zijn gereset
        var status = document.getElementById('saveStatus');
        status.textContent = 'Options reset.';
        setTimeout(function() {
            status.textContent = '';
            location.reload();
        }, 750);
    });
}