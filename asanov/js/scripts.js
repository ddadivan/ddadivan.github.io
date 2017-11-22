$(document).ready(function(){
  $('.slider').slick({
        dots: false,
        arrows: true,
        infinite: true,
        speed: 900,
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
  });
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
});