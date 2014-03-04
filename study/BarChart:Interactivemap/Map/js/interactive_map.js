$(document).ready(function() {
	//when form changes update the map

	$("#mapForm").change(function(){
		//tests and grabs value inputed by User
		//alert($("#mapForm option:selected").val());

		//create a variable to collect what wass selected
		var selectedContinent = $("#mapForm option:selected").val();

		//Test to see if collected
		if(selectedContinent=="ALL"){
			//show all the dots on the map
			$("a.dot").slideDown(1000);
		}
		else{
			//show all dots that are chosen
			//hide all other dots

			$("a.dot[continent="+selectedContinent+"]").slideDown(1000);

			$("a.dot[continent!="+selectedContinent+"]").slideUp(1000);
		}
	});

	//when dot is clicked
	$("a.dot").click(function(){
		//testing the dot 
		//alert($(this).attr("country"));


		//remove the selected class from all other dots yo
		$("a.dot").removeClass("selected");

		//add selected class to the dot that was clicked
		//basically turn it green

		$(this).addClass("selected");

		//create variable to hold path of the matching country div

		var country = ".country_detail#" + $(this).attr("country");

		//create variable that will hold html code for it

		var htmlCode = $(country).html();

		//animate container to fade out
		//put new html code in then fade back in

		$(".detail_container").fadeOut(500, function(){
			//runs after the container fades out
			//shove new code in
			$(".detail_container .country_detail").html(htmlCode);

			
			$(".detail_container").fadeIn(500);
		});

	});
});