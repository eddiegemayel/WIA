//setup some global properties 

var barSpacing = 0;
var barWidth = 0;
var chartHeight = 0;
var chartHeightArea =0;
var chartScale= 0;
var maxValue = 0;
var highestYlabel=0;
var valueMultiplier=0;

//create a document ready function
$(document).ready(function(){
	//setting all of our global properties
	//window. targets global

	//tell us how tall the chart is
	window.chartHeight = Number($(".chart-area").height());

	window.barWidth = $(".chart-area .chart-bar").width();

	window.highestYlabel = Number($(".chart-y-axis p").first().html());

	window.chartHeightArea = window.chartHeight - Number($("p.axis-value").first().height());

	window.chartScale = window.chartHeightArea / window.highestYlabel;

	window.barSpacing = Number($(".chart-area").attr("bar-spacing"));

	positionBars();
}); 

//create function to position the barSpacing
function positionBars(){
	//pick out each instance of a chart bar
	//change its position
	$(".chart-area .chart-bar").each(function(index){
		var barPosition = (window.barWidth*index)+(window.barSpacing*index)+window.barSpacing;
		$(this).css("left", barPosition+"px");

		$(this).html("<p>"+$(this).attr("bar-value")+"</p>");
		$(".chart-x-axis").append('<p style="left:'+(barPosition - (window.barWidth/2))+'px;">'+$(this).attr('label')+'</p>');

		var barValue = Number($(this).attr("bar-value"));

		//test to see if it is the biggest value
		if(barValue>window.maxValue){
			window.maxValue = barValue;
			window.valueMultiplier = window.maxValue/window.highestYlabel
		}

	});
	animateChart();
}
function animateChart(){
	//Get each bar and animate it
	$(".chart-area .chart-bar").each(function(index){
		//figure out relative height to chart height
		//take number from html, make it into a number, multiply by chart scale
		var revisedValue = Number($(this).attr("bar-value"))*window.chartScale;

		var newDelay = 125*index;

		$(this).delay(newDelay).animate({height:revisedValue}, 1000, function(){
			$(this).children("p").delay(500).fadeIn(250);

		});

	});
}

function turkeyUpdate(){
	$(".chart-area .chart-bar").each(function(index){
		//teest to see if we are talking about the turkey bar
		if(index==0){
			var revisedValue = $("#turkeyForm option:selected").val() * window.chartScale;
			$(this).html("<p>"+$("#turkeyForm option:selected").val()+"</p>");
		}
		else{
			var revisedValue = Number($(this).attr("bar-value"))* window.chartScale;
			}


			
			var newDelay = 125*index;

			$(this).delay(newDelay).animate({height:revisedValue}, 1000, function(){
				$(this).children("p").delay(500).fadeIn(250);
			});
		

	});
}