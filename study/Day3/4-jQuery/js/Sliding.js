$(function(){
	$("#slideup").click(function(){
		$("#theDiv").slideUp("normal");
	});
	$("#slidedown").click(function(){
		$("#theDiv").slideDown("slow");
	});
	$("#toggle").click(function(){
		$("#theDiv").slideToggle("slow", slideDone);
	});

});

function slideDone(){
	alert("slide is done");
};