$(document).ready(function(){
  $('.mob-btn').click(function () {
    $(this).toggleClass('active');
    if ( $(this).hasClass('active') ){
      $(".nav").toggle();
      $('.layout').toggle();
    } else{
      $(".nav").hide();
      $(".layout").hide();
    }
  });
  $('.layout').click(function() {
    if ( $('.mob-btn').hasClass('active') ){
      $('.mob-btn').removeClass('active');
      $('.nav').hide(1000);
      $('.layout').toggle();
    }
  });

  $('.foto-box').slick({
        dots: false,
        arrows:true,
        infinite: true,
        speed: 700,
        slidesToShow: 1,
        slidesToScroll: 1,
        swipeToSlide: true,
        responsive: [
          {
            breakpoint: 768,
            settings: {
              slidesToShow: 1,
              slidesToScroll: 1
            }
          }
        ]
      });
   $('.slider-wrap').slick({
        slidesToShow: 1,
        slidesToScroll: 1,
        infinite: true,
        arrows: false,
        dots:true,
        fade: true,
        asNavFor: '.slider-nav'
      });
  $('.slider-nav').slick({
      slidesToShow: 1,
      slidesToScroll: 1,
      infinite: true,
      asNavFor: '.slider-wrap',
      dots:false,
    });
    $('.price .btn').mouseenter(function() {
      $('.price').removeClass('active');
      $( this ).closest('.price').addClass('active');
    });
    $('.price .btn').mouseleave(function() {
      $('.price').removeClass('active');
    });
    $('.nav a').click(function() {
        $('.nav a').removeClass("active"); // удаляем у всех ссылок класс active
        $(this).addClass("active"); // устанавливаем класс active при нажатии
    });
});