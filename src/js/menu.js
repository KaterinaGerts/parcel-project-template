$('.button-menu').click(function () {
  $('.mobile-menu').toggleClass('is-open');
  $('.button-menu').toggleClass('is-open');
  $('body').toggleClass('is-open');
});

$(document).mouseup(function (e) { // событие клика по веб-документ
  var menu = $(".mobile-menu .link"); // тут указываем class элемента
  var btn = $('.button-menu');
  if (!btn.is(e.target)
    &&
    menu.is(e.target)) { // если клик был не по нашему блоку 
    $(".button-menu").removeClass('is-open');
    $(".mobile-menu").removeClass('is-open');
    $("body").removeClass('is-open');
  }
});
