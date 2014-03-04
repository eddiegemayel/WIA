window.onload = function() {

	//this shitty ass code makes a rectangle spin out of control until it dissapears
	var stage = new createjs.Stage("canvas1");

	var rect1 = new createjs.Shape();

	rect1.graphics.beginFill("red").drawRect(0,0, 100,100);

	rect1.regX = 50;
	rect1.regY = 50;

	rect1.x =100;
	rect1.y = 100;

	createjs.Ticker.setFPS(30);

	createjs.Ticker.addEventListener("tick", tick);

	function tick(){
		// 
		rect1.rotation +=4
		rect1.alpha -= .009;
		rect1.x ++;
		rect1.y ++;
		rect1.skewX +=20;
		stage.update();
	}
	
	stage.addChild(rect1);
	
}