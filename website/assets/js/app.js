/**
 * Alberta Block Building
 * Marketing Website
 *
 * @author Emigrant Partners, 2015
 */
(function() {

  function scrolling() {
    var lastScrollTop;
    var st = $(window).scrollTop();

    $(".header").each(function(){
      var st = $(this).scrollTop();
      if (st > lastScrollTop){
        $('.header').removeClass("is-scrolled--up").addClass("is-scrolled--down");
      } else {
        $('.header').removeClass("is-scrolled--down").addClass("is-scrolled--up");
      }
      lastScrollTop = st;

      if ($(window).scrollTop() > 50) {
        $('.header').addClass("is-scrolled");
      } else {
        $('.header').removeClass("is-scrolled");
      }
    });
  }

  scrolling();
  window.addEventListener('scroll', scrolling);
})();
