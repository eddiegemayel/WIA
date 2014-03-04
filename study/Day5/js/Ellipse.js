window.onload = function() {
	var stage = new createjs.Stage("canvas1");
	var shape = new createjs.Shape();

	shape.graphics.beginStroke("purple");
	shape.graphics.setStrokeStyle(10, 0, 1);

	//drawCircle(x, y, radius)
	shape.graphics.drawCircle(100, 100, 50);

	//draw ellipse(x, y, w, h)
	shape.graphics.drawEllipse(75, 200, 150, 50);

	shape.graphics.beginStroke("red");
	shape.graphics.arc(100, 100, 75, 0, 90*(Math.PI/180), 1);

	stage.addChild(shape);
	stage.update();
}