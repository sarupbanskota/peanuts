$(document).ready(function(){
	$(".datepicker").hide();
	$(".pick").click(function(){
		$(".hides").show();
		$(".datepicker").hide();
		$(".pick").removeClass("selected");
		$(this).addClass("selected");
	});

	$(".hides").click(function(){
		$(this).toggle();
		$(".pick").removeClass("selected");
		$(".datepicker").show();
	});

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