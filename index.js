var images = ["url(images/ParliamentHill.jpg)", "url(images/CorktownBridge.jpg)", "url(images/NationalGallery.jpg)"];
var itr = 0

$(document).ready(function(){
  setInterval(function(){
    itr = (itr + 1) % 3;
    $(".slide").fadeOut(1500, function(){
      $(".slide").css({"background": images[itr], "background-size": "cover", "background-position": "center"})
      $(".slide").fadeIn(1500);
    });
  }, 6000);
});
