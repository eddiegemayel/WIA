window.onload = function() {
	var theCanvas = document.getElementById('Canvas1');
	if (theCanvas && theCanvas.getContext) {
	var ctx = theCanvas.getContext("2d");
	if (ctx) {

			var shadowOriginal = ctx.shadowColor;
			ctx.save();

			//basic shadow setup
			ctx.shadowColor = "#000000";
			ctx.shadowOffsetX = 5;
			ctx.shadowOffsetY = 5;
			ctx.shadowBlur = 10;

			//draw a rect
			ctx.fillStyle = "rgba(0,0,255,1)";
			ctx.fillRect(20, 20, 200, 100);	

			//change shadow settings
			ctx.shadowColor = "rgba(0, 100, 100, .5)";
			ctx.shadowOffsetX = 5;
			ctx.shadowOffsetY = 5;
			ctx.shadowBlur = 5;

			var string = "Drawing text on a canvas!";

			ctx.font = "25pt Georgia";
			ctx.fillText(string, 250, 75);

			//Draw a red line with a purple shadow kinda
			ctx.lineCap = "round";
			ctx.lineWidth = 25;
			ctx.shadowColor = "rgba(150, 0, 150, .75)";
			ctx.shadowBlur = 15;
			ctx.shadowOffsetX = 5;
			ctx.shadowOffsetY = 5;
			ctx.strokeStyle = "red";

			ctx.beginPath();
			ctx.moveTo(50, 200);
			ctx.lineTo(450, 200);
			ctx.stroke();		


		}
	}
}