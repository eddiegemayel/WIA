window.onload = function() {
	var theCanvas = document.getElementById('Canvas1');
	if (theCanvas && theCanvas.getContext) {
	var ctx = theCanvas.getContext("2d");
	if (ctx) {
			ctx.strokeStyle = "blue";
			ctx.lineWidth = 5;
			ctx.beginPath();
			ctx.moveTo(50, 200);
			//bezier curve to (control X, control Y, control X2, control Y2, endX, endY)
			ctx.bezierCurveTo(50, 100, 200, 100, 200, 150);
			ctx.stroke();

			//stroke quad curve
			ctx.strokeStyle = "green";
			ctx.lineWidth = 5;
			ctx.beginPath();
			ctx.moveTo(400, 200);

			ctx.quadraticCurveTo(400, 100, 600, 150);
			ctx.stroke();
		}
	}
}