$(document).ready(function(){
    $(".tabbed-slider a").on("click", function(){
        $(".tabbed-slider a").removeClass("active");  
        $(this).addClass("active");  
        var imgNumber = $(this).attr('data-number');  
        $(".tabbedImg").removeClass("active");  
        $(".imgNumber-" + imgNumber).addClass("active"); 
    });
});
$(document).ready(function(){
  $('.product-wrap').slick({
        arrows: true,
        infinite: true,
        speed: 900,
        autoplay: true,
        autoplaySpeed: 2000,
        slidesToShow: 4,
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