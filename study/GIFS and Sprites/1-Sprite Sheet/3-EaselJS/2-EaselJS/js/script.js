var ship;

function init() {
	var canvas = document.getElementById("easel");
	var stage = new createjs.Stage(canvas);

	var centerX = canvas.width/2;
	var centerY = canvas.height/2;

	var ss = new createjs.SpriteSheet({
		//animation attributes
		animations:{
			//written similarly to json
			//sequences names
			//the flying sequences is frames 0-6
			fly:[0,6],
			//explode sequences is frames 7 through 11
			explode:[7,11]
		},
		//image attribute is the location of the sprite sheet
		images : ["images/ship-blink.png"],

		//frame attributes - parameters for each frame
		frames:{
			regX : 55,
			regY : 40,
			height : 80,
			width : 110
		}
	});

	//call sprite sheet
	ship = new createjs.BitmapAnimation(ss);

	//center the ship
	ship.x = centerX;
	ship.y = centerY;

	ship.gotoAndPlay("fly");
	// ship.gotoAndPlay("explode");

	stage.addChild(ship);
	//ticker needed to update stage 
	createjs.Ticker.setFPS(10);

	createjs.Ticker.addListener(function(){
		stage.update();
	});

	
} //end of init
function blowUp(){
		ship.gotoAndPlay("explode");

	}