$(function () {
   $('.icon-menu').click(function () {
      $(this).toggleClass('active');
      $('.menu__body').toggleClass('active');
   });

   $(".slider-reviews__inner").slick({
      dots: true,
      appendArrows: '.slider-reviews__pagination',
      appendDots: '.slider-reviews__pagination'

   });

});