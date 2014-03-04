$(function(){
	$("#fadein").click(function(){
		$("#theDiv").fadeIn(3500);
	});
	$("#fadeout").click(function(){
		$("#theDiv").fadeOut("slow");
	});
	$("#fadeto3").click(function(){
		$("#theDiv").fadeTo("slow", .3);
	});
	$("#fadeup").click(function(){
		$("#theDiv").fadeTo("slow", 1);
	});
});