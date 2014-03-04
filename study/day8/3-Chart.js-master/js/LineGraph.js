$(function() { 
	var canvas = document.getElementById("canvas");
	var ctx = canvas.getContext("2d");

	var lineChartData={
		labels:["Jan", "Feb", "Mar", "Apr", "May", "June", "July"],
		datasets:[{
			fillColor: "rgba(166, 209, 122, .5)",
			strokeColor: "rgba(166, 209, 122, 1)",
			pointColor: "rgba(166, 209, 122, 1)",
			pointStrokeColor :  "#fff",
			data: [ 1, 20, 40, 20, 60, 75, 40]
		},

		{
			fillColor: "rgba(166, 209, 122, .5)",
			strokeColor: "rgba(166, 209, 122, 1)",
			pointColor: "rgba(166, 209, 122, 1)",
			pointStrokeColor :  "#fff",
			data: [ 15, 30, 45, 25, 65, 80, 45]
		}
		]
	};

	var options = {
		// bezierCurve: false
		onAnimationComplete: done
	};

	var myLine = new Chart(ctx).Line(lineChartData, options);
	
	function done(){
		//get our data url and put it in as an image
		var dataURL = canvas.toDataURL();
		document.getElementById("canvasImg").src=dataURL;

		//make the canvas go the fuck away
		//Makes it all smooth
		$("#canvas").hide();
	}
});