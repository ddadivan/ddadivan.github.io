$(document).ready(function(){
	$('.nav a').click(function() {
	  $('.nav a').removeClass("active");
	  $(this).addClass("active");
	});

	function tagsInput (){
		if ( window.matchMedia("(max-width:800px)").matches ){
			$(".tags-wrap a").bind( "click", function() {
				if( $(".tags-wrap").find("li").hasClass("check") ) {
					$(this).closest(".tags-wrap").addClass("active");
					$(this).closest("li.check").removeClass("check");
				} else  {
					$(this).closest(".tags-wrap").find("a").removeClass("active");
					$(this).addClass("active");
					$(this).closest("li").addClass("check");
					$(this).closest(".tags-wrap").removeClass("active");
				}
			});
		} else {
			$(".tags-wrap a").bind( "click", function() {
				$(this).closest(".tags-wrap").find("a.active").removeClass("active");
				$(this).closest(".tags-wrap").find(".check").removeClass("check");
				$(this).addClass("active").closest("li").addClass("check");
			});
		}
	};
	tagsInput();
	$( window ).resize(function() {
		$(".tags-wrap a").unbind("click")
		tagsInput();
	});
});
