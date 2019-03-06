$('.header .nav a').on('click', function(){
    $('.header .nav a').removeClass('active');
    $(this).addClass('active');
});

$('.gallery-nav a').on('click', function(){
    $(this).addClass('active');
});

$('.slider-wrap').slick({
  infinite: true,
  slidesToShow: 1,
  slidesToScroll: 1,
  infinite: true,
  fade:true,
  dots:true,
  autoplaySpeed: 3000,
  autoplay:true,
  arrows:true,
  speed:1000,
  responsive: [
	    {
	      breakpoint: 767,
	      settings: {
	        slidesToShow: 1,
	        slidesToScroll: 1,
	        infinite: true,
	        dots: false
	      }
	    },
	    {
	      breakpoint: 500,
	      settings: {
	      	slidesToShow: 1,
	        slidesToScroll: 1,
	        infinite: true,
	        dots: false,
	        arrows:false
	      }
	    }
    ]
});

$(".header .mobile-menu").click(function(){
 	$(this).toggleClass("active");
  	$(".nav").toggleClass("active");
});

$(".gallery-wrap .img-menu").click(function(){
	$(".img-menu .mobile-menu").toggleClass("active");
  	$(".gallery-nav").toggleClass("active");
});

$('.detail-slider').slick({
  infinite: true,
  slidesToShow: 1,
  slidesToScroll: 1,
  fade:true,
  autoplaySpeed: 3000,
  arrows:true,
  speed:1000
});


 $('.slider-for').slick({
  slidesToShow: 1,
  slidesToScroll: 1,
  arrows: false,
  fade: true,
  asNavFor: '.slider-nav',
	 autoplay: false
});
$('.slider-nav').slick({
  slidesToShow: 4,
  slidesToScroll: 1,
  asNavFor: '.slider-for',
  dots: false,
  arrows: false,
  focusOnSelect: true
});

$('.wrap-info .slider_hide').slick({
  infinite: true,
  slidesToShow: 1,
  slidesToScroll: 1,
  infinite: true,
  fade:true,
  dots:false,
  autoplaySpeed: 3000,
  autoplay:true,
  arrows:false,
  speed:1000
});


