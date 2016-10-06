var roundThumbnail = function() {
  var element = $('main #customers .thumbnail');
  element.css('height', element.css('width'));
  element.css('border-radius', '50%');
}

var setHeightJumbotron = function() {
  var windowHeight = $(window).height();
  $('main #jumbotron').css('height', String(windowHeight) + "px");
}

$(document).ready(function() {
  setHeightJumbotron();
  roundThumbnail();
  $(window).scroll(function() {
    if($(this).scrollTop() > 50) {
      $('header nav').addClass('reduced');
    } else {
      $('header nav').removeClass('reduced');
    }
  });
});
