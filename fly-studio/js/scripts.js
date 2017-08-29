$(document).ready(function(){
    if ( $(".tabs").width() > 0 ) {
      $( function() {
          $( ".tabs" ).tabs();
      });
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
    }
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
          swipeToSlide: true
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