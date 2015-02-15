$(document).ready(function(){
	$(".picked").click(function(){
		$(this).nextAll("h3").toggle();
	});

	$(".picked").nextAll("h3").click(function(){
		value = $(this).find("span").html();
		toSwap = $(this).parent().find(".picked").find("span");
		$(this).find("span").html(toSwap.html());
		toSwap.html(value);
		$(".picked").nextAll("h3").hide();
	});

});