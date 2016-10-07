var setHeight = function() {
  var element = $('main #customers .customer_logo');
  element.css('height', element.css('width'));
}

var setHeightJumbotron = function() {
  var windowHeight = $(window).height();
  $('main #jumbotron').css('height', String(windowHeight) + "px");
}

$(document).ready(function() {
  setHeightJumbotron();
  setHeight();
  $(window).scroll(function() {
    if($(this).scrollTop() > 50) {
      $('header nav').addClass('reduced');
    } else {
      $('header nav').removeClass('reduced');
    }
  });
});
