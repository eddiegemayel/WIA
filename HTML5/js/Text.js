window.onload = function() {
	var theCanvas = document.getElementById('Canvas1');
	if (theCanvas && theCanvas.getContext) {
	var ctx = theCanvas.getContext("2d");
	if (ctx) {
			//fillText(textstring, X, Y, Max Width if you want)
			var string = "Yo Whats Good";

			//draw string using default settings
			ctx.fillText(string, 20, 20);

			ctx.font = "25pt Georgia";
			ctx.fillText(string, 20, 60);

			ctx.fillStyle = "blue";
			ctx.fillText(string, 20, 100);

			ctx.font = "32pt Verdana";
			ctx.fillStyle = "pink";
			ctx.strokeStyle = "rgba(0, 255, 0, .8)";
			ctx.fillText(string, 20, 160);
			ctx.strokeText(string, 20, 160);
		}
	}
}