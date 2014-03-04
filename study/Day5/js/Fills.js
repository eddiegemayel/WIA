window.onload = function() {
	//setup canvas and stage yo 
	var stage = new createjs.Stage("canvas1");
	
	//lets draw a rectangle
	//create a new shape first
	var rect1 = new createjs.Shape();

	//create fill color
	rect1.graphics.beginFill("purple");
	rect1.graphics.beginFill(createjs.Graphics.getRGB(162,216,255, .5));
	rect1.graphics.beginFill("rgb(162,216,255)");

	//linear gradiant
	//first array of colors,
	//second array of color stops
	//starting / ending points
	rect1.graphics.beginLinearGradientFill(["yellow", "purple", "red"], [0, .75, 1], 50, 50, 50, 150);


	//radial gradiant
	rect1.graphics.beginRadialGradientFill(["yellow", "pink", "red"], [0, .5, 1], 100, 100, 0, 150, 100, 100);



	//draw out the rectangle
	rect1.graphics.rect(50, 50, 100, 100);

	//add it to the stage
	stage.addChild(rect1);

	//update the fucking stage
	stage.update();		
}