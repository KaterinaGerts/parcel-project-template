(() => {
  const 
    menuBtnRef = document.querySelector("[data-menu-button]");
  mobileMenuRef = document.querySelector("[data-menu]");
  bodyRef = document.querySelector("[data-body]");
  menuBtnRef.addEventListener('click', () => {
    menuBtnRef.classList.toggle('is-open');
    mobileMenuRef.classList.toggle('is-open');
    bodyRef.classList.toggle('is-open');
  });
})();

// не знаю как применить скрипт ниже,
// чтоб при клике на ссылку в меню, снимался класс .is - open
  
// $('.button-menu').click(function() {
//   		$('.mobile-menu').toggleClass('mobile-menu.is-open');
// });
    
// $(document).mouseup(function(e) { // событие клика по веб-документ
//   var div = $(".menu-mobile"); // тут указываем class элемента
//   var toggle = $('.menu-toggle');
//   if (!div.is(e.target) // если клик был не по нашему блоку
//     &&
//     !toggle.is(e.target)
//     &&
//     div.has(e.target).length === 0) { // и не по его дочерним элементам
//     $(".mobile-menu").removeClass('mobile-menu.is-open');
//   }
// });
