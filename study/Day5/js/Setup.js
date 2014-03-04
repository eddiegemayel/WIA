window.onload = function() {
	//first make stage
	//stage contains all other display objects and containers
	var canvas = document.getElementById("canvas1");

	//create our stage
	var stage = new createjs.Stage("canvas1");

	//create a blue circle
	var circleGraphic = new createjs.Graphics();

	//draw the circle with radius of 50 centered at 0,0 - relative to shapes position
	circleGraphic.beginFill("blue");
	circleGraphic.drawCircle(0,0, 50);	

	//create new shape instance
	//shapes are display objects that draw vector graphics onto our stage
	var circleShape = new createjs.Shape(circleGraphic);

	//all display objects share common properties - aplha, x, y, skew, scale
	circleShape.x = 50;
	circleShape.y = 50;	

	//add shape to the stages
	// use .addChild(); method
	stage.addChild(circleShape);

	//canvas wont show until it is updated
	stage.update();
}