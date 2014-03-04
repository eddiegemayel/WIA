$(function(){

	//this below allows us to show the div then change its color after the Alert shows up
	$("#show").click(function(){
		$("#theDiv").show("normal", function(){
			alert("div is now fully shown");
			$("#theDiv").css("background-color", "red");
		});
	});
	$("#hide").click(function(){
		$("#theDiv").hide("fast");
	});


	//hides or shows the div that we have selected
	$("#toggle").click(function(){
		$("#theDiv").toggle("slow");
	});
});