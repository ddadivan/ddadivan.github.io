$(document).ready(function(){
  $('.slider__slider-box').slick({
    dots: false,
    arrows:true,
    infinite: true,
    speed: 700,
    slidesToShow: 4,
    slidesToScroll: 1,
    swipeToSlide: true,
    responsive: [    
      {
        breakpoint: 1280,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 1
        }
      },
      {
        breakpoint: 1070,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1
        }
      },
      {
        breakpoint:750,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1
        }
      }
    ]
  });
  $('.mob-btn').click(function() {
    $('.header__nav-wrap').toggleClass('active');
    $(this).toggleClass('active');
    $('.layout').toggleClass('active');
    $('body').toggleClass('no-scroll');
  });
  $('.layout').click(function() {
    $('.header__nav-wrap').removeClass('active');
    $(this).removeClass('active');
    $('.mob-btn').removeClass('active');
    $('body').removeClass('no-scroll');
  });

$(window).scroll(function() {
    var scroll = $(window).scrollTop();
    if (scroll >= 10) {
        $(".header").addClass("active");
    } else{
      $(".header").removeClass("active");
    }
});

$(document).on("scroll", onScroll);
  //smoothscroll
  $('a[href^="#"]').on('click', function (e) {
    e.preventDefault();
    $(document).off("scroll");

    $('.header__nav a').each(function () {
        $(this).removeClass('active');
    })
    $(this).addClass('active');

    var target = this.hash,
        menu = target;
    $target = $(target);
    $('html, body').stop().animate({
        'scrollTop': $target.offset().top+2
    }, 500, 'swing', function () {
        window.location.hash = target;
        $(document).on("scroll", onScroll);
    });
  });
});
function onScroll(event){
  var scrollPos = $(document).scrollTop();
  $('.header__nav a').each(function () {
      var currLink = $(this);
      var refElement = $(currLink.attr("href"));
      if (refElement.position().top <= scrollPos && refElement.position().top + refElement.height() > scrollPos) {
          $('.header__nav ul li a').removeClass("active");
          currLink.addClass("active");
      }
      else{
          currLink.removeClass("active");
      }
  });
}