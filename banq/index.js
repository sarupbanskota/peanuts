$(document).ready(function(){
	$(".dropdown-list").hide();
	$(".more").hide();
	$("section.landing > div > h2").click(function(){
		$("h2").hide();
		$("#login-form").show();
	});
	$("section.table > div.loader > h2").click(function(){
		$(this).closest("section").next("section.more").show();
		$(this).hide();
	});
	$("header > h1").click(function(){
		$(this).next(".dropdown-list").toggle();
	});
	$(".dropdown-list > h2").click(function(){
		var dropped_value = $(this).html();
		$(this).html($(this).parent().prev("h1").find("span").html());
		$(this).parent().prev("h1").find("span").html(dropped_value);
		$(this).parent().hide();

		//$(".graph").hide();
		//$("#" + dropped_value.replace(" ", "")).show();

		//put this in the header
		//put header into the h2 spot
		//hide whats currently in graph
		//put the graph corresponding to that id
		//hide whats currently in the table
		//put table corresponding to id
	});

});

