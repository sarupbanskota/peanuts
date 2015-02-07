$(document).ready(function(){
	$(".more").hide();
	$("section.landing > div > h2").click(function(){
		$("h2").hide();
		$("#login-form").show();
	});
	$("section.table > div.loader > h2").click(function(){
		$(this).closest("section").next("section.more").show();
		$(this).hide();
	});

});

