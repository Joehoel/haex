/*Het hacken kan beginnen*/
chrome.storage.sync.get(['imagehackUrl'], function(result) {
  theImageToInsert = result.imagehackUrl;
  const images = document.querySelectorAll("img");
  images.forEach(image => {
    image.src = theImageToInsert;
  });
});

