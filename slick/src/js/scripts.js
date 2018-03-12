$(document).ready(function(){
  $('.slider-box').slick({
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
  $('.mob-btn').click(function() {
    $('.nav').toggleClass('active');
    $(this).toggleClass('active');
    $('.layout').toggleClass('active');
    $('body').toggleClass('no-scroll');
  });
  $('.layout').click(function() {
    $('.nav').removeClass('active');
    $(this).removeClass('active');
    $('.mob-btn').removeClass('active');
    $('body').removeClass('no-scroll');
  });
});