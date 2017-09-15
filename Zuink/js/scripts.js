 $(document).ready(function(){
 	$('.offers').slick({
	  infinite: true,
	  slidesToShow: 4,
	  slidesToScroll: 1
	});
	$('.portfolio-list').slick({
	  infinite: true,
	  slidesToShow: 4,
	  slidesToScroll: 1
	});
	var validator = $(".promo-form-box").validate({
		// submitHandler:showPopup()
		success: "valid",
		submitHandler: function() { 
			var formName = $("#offer-name").val();
			var formMail = $("#offer-mail").val();
			var formTel = $("#offer-tel").val();
			$(".pop-up").addClass("active");
			$(".pop-up-layout").addClass("active");
			$("#name").text( formName );
			$("#mail").text( formMail );
			$("#tel").text( formTel );
		}
	});
	$(".form-pop-up-submit").click(function() {
		$(".pop-up").removeClass("active");
		$(".pop-up-layout").removeClass("active");
		$('#form')[0].reset();
	});
	$(".pop-up-layout").click(function() {
		$(".pop-up").removeClass("active");
		$(".pop-up-layout").removeClass("active");
		$('#form')[0].reset();
	});
});