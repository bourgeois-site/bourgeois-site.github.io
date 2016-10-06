var roundThumbnail = function() {
  var element = $('main #customers .thumbnail');
  element.css('height', element.css('width'));
  element.css('border-radius', '50%');
}
$(document).ready(function() {
  roundThumbnail();
  $(window).scroll(function() {
    if($(this).scrollTop() > 50) {
      $('header nav').addClass('reduced');
    } else {
      $('header nav').removeClass('reduced');
    }
  });
});
