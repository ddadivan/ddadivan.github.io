$(document).ready(function(){
  $('.gallery').slick({
        centerMode: true,
        centerPadding: '10%',
        dots: true,
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
  $('.insta').slick({
        dots: false,
        arrows: true,
        infinite: true,
        speed: 900,
        slidesToShow: 3,
        slidesToScroll: 3,
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
  $('.work-slider').slick({
        dots: true,
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
    $(".down").on("click","a", function (event) {
        event.preventDefault();
        var id  = $(this).attr('href'),
            top = $(id).offset().top;
        $('body,html').animate({scrollTop: top-100}, 1500);
    });
});
