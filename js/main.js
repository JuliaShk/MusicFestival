$(function () {

   let headerNav = $('.header__nav').outerHeight();
   let burger = $('#burger');
   let nav = $('#nav');

   $('[data-scroll]').on('click', function(event){
      event.preventDefault();

      let elementId = $(this).data('scroll');
      let elementOffSet = $(elementId).offset().top;

      $('html,body').animate({
         scrollTop:elementOffSet
      },700);

      nav.removeClass('show');
   });

   

   burger.on('click', function(event){
      event.preventDefault();
      nav.css('top',headerNav+15);
      nav.toggleClass('show');
   });
});