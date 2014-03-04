window.onload = function() {
	var stage = new createjs.Stage("canvas1");

	var shape = new createjs.Shape();

	shape.graphics.beginStroke("purple");
	shape.graphics.setStrokeStyle(5, 1, 1);

	//drawPolyStar
	shape.graphics.drawPolyStar(75, 75, 50, 5, .5, 0);
	shape.graphics.drawCircle(75, 75, 50);

	//triangle shape 
	shape.graphics.drawPolyStar(350, 75, 50, 3, .5,-90);

	var shape2 = new createjs.Shape();

	shape2.graphics.beginFill("red");
	shape2.graphics.drawPolyStar(250, 250, 50, 3, 0, -90);

	stage.addChild(shape);
	stage.addChild(shape2);

	//add listener to specific shape
	shape2.addEventListener("click", function(event){
		console.log("Triangle has been butt fucked.");
	});


	stage.update();
}