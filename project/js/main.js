window.onload = function(){
	var Canvas1 = document.getElementById("Canvas1");
	var Canvas2 = document.getElementById("Canvas2");
	//draws logo
	if (Canvas1 && Canvas1.getContext) {
		var ctx = Canvas1.getContext("2d");
		if(ctx){
			var img = document.getElementById("img1");
			ctx.drawImage(img, 0, 0);
		}
	}

	//Draws a level 6 header text
	if (Canvas2 && Canvas2.getContext) {
		var ctx = Canvas2.getContext("2d");
		if(ctx){
			var string = "Choose A Tasty Item!";

			ctx.font = "bold 1.15rem Helvetica Neue";
			ctx.fillStyle = "#161212";
			ctx.fillText(string, 0, 15);
		}
	}

	$("a.pin").click(function(){
		//testing the pins
		//alert($(this).attr("location"));

		//remove the selected class from all other pins
		$("a.pin").removeClass("selected");

		//add selected class to the dot that was clicked
		$(this).addClass("selected");

		//create variable to hold path of the matching location div
		var location = ".location_info#" + $(this).attr("location");

		//create variable that will hold html code for it

		var htmlCode = $(location).html();

		//console.log(location);

		//animate container to fade out
		//put new html code in then fade back in

		$(".detail_container").fadeOut(500, function(){
			//runs after the container fades out
			//shove new code in
			$(".detail_container .location_info").html(htmlCode);

			
			$(".detail_container").fadeIn(500);
		});
	});
}