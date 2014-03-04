window.onload = function() {
	var stage = new createjs.Stage("canvas1");
	var shape = new createjs.Shape();

	shape.graphics.beginStroke("blue");
	shape.graphics.setStrokeStyle(10, "round", "round");

	shape.graphics.moveTo(50, 50).lineTo(250, 250);
	shape.graphics.lineTo(50, 250);
	shape.graphics.closePath();

	shape.graphics.s("purple").ss(10, 1, 1).mt(50, 50).lt(250, 250).lt(50, 250).cp();

	stage.addChild(shape);
	stage.update();
}