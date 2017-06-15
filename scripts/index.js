var images = ["images/ParliamentHill.jpg", "images/CorktownBridge.jpg", "images/NationalGallery.jpg"];
var itr = 0

function preload(arrayOfImages) {
  $(arrayOfImages).each(function () {
    $('<img/>')[0].src = this;
    // Alternatively you could use:
    // (new Image()).src = this;
  });
}

preload(images);

$(document).ready(function () {
  setInterval(function () {
    itr = (itr + 1) % 3;
    $(".slide").fadeOut(1500, function () {
      $(".slide").css({ "background": "url(" + images[itr] + ")", "background-size": "cover", "background-position": "center" })
      $(".slide").fadeIn(1500);
    });
  }, 6000);
});
