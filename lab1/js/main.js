/*
     Name: Eddie Gemayel
     Date: Feb 4 , 2014
     Class & Section:  WIA-0214
     Comments: "HTML5 Canvas Drawing"
 */
 /*******************************************
HTML5 Shape Drawing Activity
    1.  Setup the canvas and 2d context
    2.  Draw out each shape in the sections below
     
********************************************/
window.onload = function(){

	//define variables
	var canvas1 = document.getElementById("canvas1");
	var canvas2 = document.getElementById("canvas2");
	var canvas3 = document.getElementById("canvas3");
	var canvas4 = document.getElementById("canvas4");
	var canvas5 = document.getElementById("canvas5");
	var canvas6 = document.getElementById("canvas6");

	if(canvas1){
		/*******************************************
		PART 1

		Draw a rectangle starting at point (0 ,0)
		That has a width of 50 px and a heigh of 100px
		Set the color of the rectangle to a shade of blue.
		Set the stroke color to black and the dimension of the stroke are the same as the rectangle.

		Reminder - set the style first then draw.
		********************************************/

		var ctx = canvas1.getContext("2d");

		ctx.strokeStyle = "black";
		ctx.lineWidth = 5 ;
		ctx.fillStyle = "blue";

		ctx.strokeRect(0, 0, 50, 100);
		ctx.fillRect(0, 0, 50, 100);

	}
	if(canvas2){
		/*******************************************
		PART 2

		Draw a circle starting at point (50 ,50)
		That has a radius of 20 px 
		Set the color of the circle to a shade of red and set the alpha to .5
		Set the stroke color to black and use a radius of 30px for this circle.

		Reminder - set the style first then draw.
		Use the arc method
		********************************************/
		//arc(x, y, radius, startAngle, endAngle, clockwise(boolean))

		var ctx = canvas2.getContext("2d");

		ctx.strokeStyle = "black";
		ctx.fillStyle = "rgba(255, 0, 0, .5)";
		ctx.lineWidth = 5 ;

		var degrees = 360;
		var radians = (Math.PI/180) * degrees;
		ctx.beginPath();
		ctx.arc(50, 50, 20, 0, radians);
		ctx.fill();
		ctx.stroke();
	}
	if(canvas3){
		/*******************************************
		PART 3

		Practice using Path drawing.
		Create a 5-point star shaped pattern using the lineTo method.
		Begin this shape at (100, 100)

		Height and width and color are up to you.

		********************************************/

		var ctx = canvas3.getContext("2d");

		ctx.strokeStyle = "lightBlue";
		ctx.fillStyle = "gold";
		ctx.lineWidth = 2;

		ctx.beginPath();
		ctx.moveTo(100, 100);
		//start at top
		ctx.lineTo(80, 135);

		//left point
		ctx.lineTo(30, 120);
		ctx.lineTo(70, 150);

		//bottom left point	
		ctx.lineTo(40, 180);
		ctx.lineTo(80, 162);

		//bottom right point
		ctx.lineTo(120, 180);
		ctx.lineTo(100, 150);

		//right point
		ctx.lineTo(150, 120);
		ctx.lineTo(100, 130);

		//top point end
		ctx.lineTo(100, 100);
		ctx.fill();
		ctx.stroke();
	}
	if(canvas4){
		/*******************************************
		PART 4

		Practice drawing with Bezier curves.
		Try drawing the top to an umbrella.
		This should have one large arc (a half circle) on the top and scalloped edges on the bottom.

		Position, height, width and color are your choice.
		Do not overlap any other object.

		********************************************/
		//arc(x, y, radius, startAngle, endAngle, clockwise(boolean))
		//bezier curve to (control X, control Y, control X2, control Y2, endX, endY)

		var ctx = canvas4.getContext("2d");

		//dope ass umbrella below!!!
		
		ctx.beginPath();
		ctx.arc(100, 100, 50, 0, Math.PI, true);
		ctx.closePath();
		ctx.stroke();

		ctx.fillStyle = "lightBlue";

		ctx.fill();

		//bezier curves
		ctx.beginPath();
		ctx.moveTo(50, 100);
		ctx.bezierCurveTo(50, 120, 70, 120, 70, 100);
		ctx.stroke();

		ctx.beginPath();
		ctx.moveTo(70,100);
		ctx.bezierCurveTo(70, 120, 90, 120, 90, 100);
		ctx.stroke();

		ctx.beginPath();
		ctx.moveTo(90,100);
		ctx.bezierCurveTo(90, 120, 110, 120, 110, 100);
		ctx.stroke();

		ctx.beginPath();
		ctx.moveTo(110,100);
		ctx.bezierCurveTo(110, 120, 130, 120, 130, 100);
		ctx.stroke();

		ctx.beginPath();
		ctx.moveTo(130,100);
		ctx.bezierCurveTo(130, 120, 150, 120, 150, 100);
		ctx.stroke();

	}
	if(canvas5){
		/*******************************************
		PART 5
		Practice using text.
		Draw text into your canvas.  It can said whatever you would like in any color.
		********************************************/
		var ctx = canvas5.getContext("2d");

		var string = "This is actually not text!!";

		ctx.font = "12pt Arial";
		ctx.fillStyle = "darkRed";
		ctx.fillText(string, 15, 40);
	}
	if(canvas6){
		/*******************************************
		PART 6
		Putting it all together. 
		Using a combination of all the methods. 
		Create a complex scene.
		You must use at least 3 different methods.
		********************************************/
		var ctx = canvas6.getContext("2d");
		var string = "A Lovely Day!";
		ctx.font = "14pt Verdana";

		//sky
		ctx.fillStyle = "lightBlue";
		ctx.fillRect(0, 0, 200, 200);

		//sun
		ctx.beginPath();
		ctx.arc(0, 0, 70, 0, 6);
		ctx.fillStyle = "gold";
		ctx.fill();
		ctx.stroke();

		//clouds
		ctx.beginPath();
		ctx.arc(140, 60, 30, 0, Math.PI, true);
		ctx.fillStyle = "white";
		ctx.closePath();
		ctx.stroke();
		ctx.fill();

		ctx.beginPath();
		ctx.arc(170, 40, 30, 0, Math.PI, true);
		ctx.fillStyle = "white";
		ctx.closePath();
		ctx.stroke();
		ctx.fill();

		//ground
		ctx.fillStyle = "darkGreen";
		ctx.fillRect(0, 170, 200, 30);
		ctx.strokeRect(0, 170, 200, 30);

		//tree trunk
		ctx.fillStyle = "brown";
		ctx.fillRect(35, 100, 20, 200);
		ctx.strokeRect(35, 100, 20, 200);

		//tree leaves
		ctx.beginPath();
		ctx.fillStyle = "green";
		ctx.arc(45, 100, 30, 0, 2*Math.PI);
		ctx.fill();
		ctx.stroke();

		//text
		ctx.fillStyle = "purple";
		ctx.fillText(string, 60, 150);
	}
}