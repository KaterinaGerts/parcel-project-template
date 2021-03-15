$('.button-menu').click(function() {
  $('.mobile-menu').toggleClass('is-open');
  $('.button-menu').toggleClass('is-open');
  $('body').toggleClass('is-open');
});
    
$(document).mouseup(function(e) { // событие клика по веб-документ
  var div = $(".mobile-menu"); // тут указываем class элемента
  var toggle = $('.button-menu');
  if (!div.is(e.target)
  &&
    !toggle.is(e.target)) { // если клик был не по нашему блоку 
    $(".button-menu").removeClass('is-open');
    $(".mobile-menu").removeClass('is-open');
    $("body").removeClass('is-open');
  }
});
