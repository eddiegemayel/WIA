window.onload = function() {
	var theCanvas = document.getElementById('Canvas1');
	if (theCanvas && theCanvas.getContext) {
	var ctx = theCanvas.getContext("2d");
	if (ctx) {
		
			ctx.fillStyle = "blue";
			ctx.fillRect(0,0, 100, 50);
			ctx.save();

			//scaling
			ctx.scale(1.5,2);
			

			//they are same size, blue is just scaled thats all. i think
			ctx.fillStyle = "red";
			ctx.fillRect(0, 50, 100, 50);


			//change the scale			
			ctx.restore();	
			ctx.scale(.5, .5);
			ctx.fillStyle = "purple";
			ctx.fillRect(0, 225, 100, 50);
		}
	}
}