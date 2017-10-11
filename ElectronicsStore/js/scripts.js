$(document).ready(function(){
      $(".tabbed-slider a").on("click", function(){
        $(".tabbed-slider a").removeClass("active");  
        $(this).addClass("active");  
        var imgNumber = $(this).attr('data-number');  
        $(".tabbedImg").removeClass("active");  
        $(".tabbedImg-" + imgNumber).addClass("active"); 
      });
});