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

  $('main #services img').mouseenter(function() {
    var target = $(this).prev();
    target.css('color', '#000');
    target.css('text-shadow', 'none');
  });
  $('main #services img').mouseleave(function() {
    var target = $('main #services a span')
    target.css('color', '#fff');
    target.css('text-shadow', '0 1px 1px #000');
  });
});
