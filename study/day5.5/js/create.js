window.onload = function() {
	console.log('test');
	//get canvas element
	var canvas = document.getElementById("canvas1");
	
	//Create our stage wrapped around our canvas
	var stage = new createjs.Stage(canvas);
	
	//create a graphic 
	var shape = new createjs.Shape();
	
	//Draw The Shape
	//prefix is shape.graphics.
	//EXTREME compacted code
shape.graphics.f("rgba(221,212,47,254)").ss(1).s("rgba(35,31,32,254)").p("EAlWARqIP8oSIi+RqIM0MgIx0CqIn+QGIn0wGIx0iqIM0sgIi+xqIPyIS").cp().ef().es();





	stage.addChild(shape);
	// Then we update the stage to draw it up
	stage.update();

}