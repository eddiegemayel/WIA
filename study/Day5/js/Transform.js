window.onload = function() {
	var stage = new createjs.Stage("canvas1");

	var shape = new createjs.Shape();

	shape.graphics.beginFill("red");
	shape.graphics.drawRect(50, 50, 100, 100);

	shape.regX = 100;
	shape.regY = 100;
	shape.rotation = 30;

	stage.addChild(shape);
	stage.update();
}