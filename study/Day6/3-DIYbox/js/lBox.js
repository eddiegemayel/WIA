window.onload = function() {
	$(".lightbox_trigger").click(function(e){
		//prevent the default action
		e.preventDefault();

		//save the clicked link href
		var image_href = $(this).attr("href");

		/////
		//Create the light box or use an
		//existing ligtbox.
		/////

		if($("#lightbox").length>0){
			//lightbox div has already been created
			//place the href as img src value
			$("#content").html('<img src="' + image_href +'"/>');

			//show light box
			$("#lightbox").slideDown(1000);
		}
		else{
			//lightbox has not been created yet
			//create it here

			//variable to hold html for the div
			var lightbox = 
				'<div id="lightbox">' +
				'<p>Click to close</p>'+
				'<div id="content">'+
				'<img src="' + image_href +'"/>' +
				'</div>'+
				'</div>';

			//insert the lightbox div into page
			$("body").append(lightbox);
		}
	});	

	//click anywhere to exit lightbox
	$("#lightbox").live("click", function(){
		$("#lightbox").slideUp(1000);
	});
}