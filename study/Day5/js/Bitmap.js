window.onload = function() {
	var canvas = document.getElementById("canvas");
	var stage = new createjs.Stage(canvas);
	//create a bitmap variable to hold image in createjs
	var bmp = new createjs.Bitmap();


	//create image variable
	var img = new Image();
	img.src = "images/ship.svg";
	img.onload = updateStage;

	function updateStage(e){
		bmp = new createjs.Bitmap(e.target);
		//set our x and y to place in center of canvas
		var centerX = canvas.width/2;
		var centerY = canvas.height/2;

		bmp.x = centerX;
		bmp.y = centerY;

		bmp.regX = 50;
		bmp.regY = 50;

		//Scale the ship up
		bmp.scaleX = 4;
		bmp.scaleY = 4;

		stage.addChild(bmp);
		//stage.update();
	}

	//add event listener to listen for the tick
	createjs.Ticker.addEventListener("tick", tick);

	function tick(e){
		//this function wil be called the default of 20 fps
		bmp.rotation += 2;
		bmp.x += 2;
		bmp.y -=2;
		stage.update();

	}
}