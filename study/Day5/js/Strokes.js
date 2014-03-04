window.onload = function() {
	//setup the goddamn canvas and the fucking stage
	var canvas = document.getElementById("canvas1");
	var stage = new createjs.Stage(canvas);

	//create a shape
	var shape = new createjs.Shape();

	//basic stroke color
	shape.graphics.beginStroke("purple");

	//setup stroke styles
	//can take 1 to 4 parameters
	//first is thickness
	//second is caps
	//third is joints
	//fourth is miter
	shape.graphics.setStrokeStyle(10, "round", "round");

	//draw some shit 
	shape.graphics.moveTo(25,25);
	// shape.graphics.lineTo(250, 25);

	//quadraticCurveTo(cpx, cpy, x, y)
	shape.graphics.quadraticCurveTo(50, 175, 250, 250);

	//arcTo(x1, y1, x2, y2, radius);
	shape.graphics.arcTo(100, 50, 100, 500, 60);

	//bezierCurveTo(cpx1, cpy1, cpx2, cpy2, x, y);
	shape.graphics.bezierCurveTo(100, 50, 100, 200, 250, 250);

	shape.graphics.lineTo(50, 250);

	//closed path .closePath()
	shape.graphics.closePath();

	stage.addChild(shape);

	stage.update();	
}