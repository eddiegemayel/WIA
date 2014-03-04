//load all the bullshit needed
google.load("visualization", 1, {packages:["corechart"]});

//onces its loaded, run the function
google.setOnLoadCallback(drawChart);

function drawChart(){
	//create data table for this worthless bullshit
	var data = google.visualization.arrayToDataTable([ 
		["Task", "Hours Per Day"],
		["Drugs", 8],
		["Eat", 2],
		["Commute" , 2],
		["Watch Tv", 2],
		["School", 7]
		]);

	var options = {
		title: "My Daily Activites",
		is3D:true
	};

	var chart = new google.visualization.PieChart(document.getElementById("piechart"));

	//draw the chart
	chart.draw(data, options);
}