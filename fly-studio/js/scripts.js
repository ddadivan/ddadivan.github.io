$(document).ready(function(){
  //MOBILE MENU
  (function() {
      "use strict";
      var toggles = document.querySelectorAll(".mob-btn");
      for (var i = toggles.length - 1; i >= 0; i--) {
        var toggle = toggles[i];
        toggleHandler(toggle);
      };
      $('.layout').click(function() {
        ($(".mob-btn").hasClass("active") === true) ? $(".mob-btn").removeClass("active")  : $(".mob-btn").addClass("active");
        $(".top-nav").hide(1000);
        ($(".mob-btn").hasClass("active") === true) ? $(".layout").toggle('wiggle') : $(".layout").hide('wiggle');
      });
      function toggleHandler(toggle) {
        toggle.addEventListener( "click", function(e) {
          e.preventDefault();
          (this.classList.contains("active") === true) ? this.classList.remove("active")  : this.classList.add("active");
          (this.classList.contains("active") === true) ? $(".layout").toggle('wiggle') : $(".layout").hide('wiggle');
          (this.classList.contains("active") === true) ? $("body").addClass('no-scroll') : $("body").removeClass('no-scroll');
          (this.classList.contains("active") === true) ? $(".top-nav").toggle('wiggle') : $(".top-nav").hide('wiggle');
        });
      }
  })();
  if ( $(".tabs").width() > 0 ) {
    $( function() {
        $( ".tabs" ).tabs();
    });
  }
  $( ".tabs" ).on( "tabsactivate", function( event, ui ) {
      $('.port-list').slick('unslick');
      $('.port-list').slick({
        dots: false,
        arrows: true,
        infinite: false,
        speed: 300,
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
  if ( $(".port-list").width() > 0 ) {
      $('.port-list').slick({
        dots: false,
        arrows: true,
        infinite: false,
        speed: 300,
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
  }
  if ( $(".logo-list").width() > 0 ) {
      $('.logo-list').slick({
        dots: false,
        arrows: true,
        infinite: false,
        slidesToShow: 5,
        slidesToScroll: 5,
        swipeToSlide: true,
        responsive: [
            {
              breakpoint: 768,
              settings: {
                slidesToShow: 3,
                slidesToScroll: 3
              }
            },
            {
              breakpoint: 468,
              settings: {
                slidesToShow: 2,
                slidesToScroll: 2
              }
            }
          ]
      });
  }
  if ( $(".testimonials-list").width() > 0 ) {
      $('.testimonials-list').slick({
        dots: false,
        arrows: true,
        infinite: false,
        slidesToShow: 1,
        slidesToScroll: 1,
        swipeToSlide: true
      });
    }
});