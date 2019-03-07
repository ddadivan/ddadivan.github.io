$('.portfolio').slick({
  slidesToShow: 3,
  variableWidth: true,
  arrows: false,
  infinite: true,
  speed: 700,
  autoplay: true,
  dots: false,
  initialSlide: 1,
  responsive: [
  {
      breakpoint: 1590,
      settings: {
        slidesToShow: 3,
        centerMode: true,
      }
    },
    {
      breakpoint: 767,
      settings: {
        slidesToShow: 1,
         variableWidth: true,
         centerMode: true,
      }
    }
  ],
});

$(document).ready(function(){
  $('.nav-icon').click(function(){
    $(this).toggleClass('open');
    $('.nav').toggleClass('active');
    $('body').toggleClass('over');
  });
});
 
$(window).scroll(function(){
if ($(window).scrollTop() > 150) {
$('header').addClass('fixed');
} else {
$('header').removeClass('fixed');
}
})