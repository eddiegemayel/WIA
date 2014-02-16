window.onload = function(){
	var Canvas1 = document.getElementById("Canvas1");
	//draws logo
	if (Canvas1 && Canvas1.getContext) {
		var ctx = Canvas1.getContext("2d");
		if(ctx){
			var img = document.getElementById("img1");
			ctx.drawImage(img, 0, 0);
		}
	}

	$("a.pin").click(function(){
		//testing the pins
		//alert($(this).attr("location"));

		//remove the selected class from all other pins yo
		$("a.pin").removeClass("selected");

		//add selected class to the dot that was clicked
		$(this).addClass("selected");


	});
}