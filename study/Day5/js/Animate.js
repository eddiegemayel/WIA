window.onload = function() {
	var canvas = document.getElementById("canvas");
	var stage = new createjs.Stage(canvas);

	var ship = new createjs.Bitmap("images/ship.png");

	//Center it again
	var centerX = canvas.width/2;
	var centerY = canvas.height/2;

	//set our x and y and our registration point
	ship.x = centerX;
	ship.y = centerY;
	ship.regX = 50;
	ship.regY = 50;

	stage.addChild(ship);

	//Set frame rate
	createjs.Ticker.setFPS(30);

	createjs.Ticker.addEventListener("tick", tick);

	function tick(e){
		//shake the ship
		//ship.x = centerX + (Math.random()-.5) *5;
		//ship.y = centerY + Math.random() *5;

		//create wave motions using sine and cosine
		// ship.x = centerX + Math.sin(3);

		//Next Lines are Important!
		//The Dividing number controls speed and the Multiply number controls distance form origin point
		//////////ship.x = centerX + Math.sin(createjs.Ticker.getTicks()/35)*200;
		//ship.y = centerY + Math.sin(createjs.Ticker.getTicks()/5)*50;

		//circular motion!!!! so cool
		//if values for both X and Y are the same, the cirlce will be perfect. Otherwise, if the values are different, it will be an oval
		ship.x = centerX + (Math.sin(createjs.Ticker.getTicks()/7)*50);
		ship.y = centerY + (Math.cos(createjs.Ticker.getTicks()/7)*50);
		stage.update();
	}
}