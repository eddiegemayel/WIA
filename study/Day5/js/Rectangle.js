window.onload = function() {
	var stage = new createjs.Stage("canvas1");

	var shape = new createjs.Shape();

	shape.graphics.beginStroke("purple");
	shape.graphics.setStrokeStyle(10, 0, 1);

	shape.graphics.rect(50, 50, 300, 300);

	shape.graphics.beginStroke("blue");
	shape.graphics.drawRoundRect(75, 75, 250, 250, 50);

	shape.beginStroke("red");
	shape.graphics.drawRoundRectComplex(100, 100, 200, 200, 50, 0, 50, 0);

	stage.addChild(shape);

	stage.update();
}