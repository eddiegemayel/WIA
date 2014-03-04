$(function(){
	//when button is clicked the whole div grows to the right
	$("#right").click(function(){
		$("#theDiv").animate({width:"500px"},1000);
	});
	$("#text").click(function(){
		$("#theDiv").animate({fontSize:"24pt"}, 1000);
	});
	$("#toggle").click(function(){
		$("#theDiv").animate({left:"500"}, 1000, "swing");
	});

	//these animate the div one animation at a time, the first one fucks with it then the reset function resets it
	$("#multiple").click(function(){
		// $("#theDiv").animate({left:"500", height:"500px", width:"500px", fontSize:"24pt"}, 1000, "swing");
		$("#theDiv").animate({left:"500"});
		$("#theDiv").animate({height:"500"});
		$("#theDiv").animate({width:"500"});
		$("#theDiv").animate({fontSize:"24pt"});
	});
	$("#reset").click(function(){
		$("#theDiv").animate({left:"0"});
		$("#theDiv").animate({height:"180px"});
		$("#theDiv").animate({width:"250px"});
		$("#theDiv").animate({fontSize:"16pt"});
	});
});