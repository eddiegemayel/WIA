window.onload = function() {
	var theCanvas = document.getElementById('Canvas1');
	if (theCanvas && theCanvas.getContext) {
	var ctx = theCanvas.getContext("2d");
	if (ctx) {
  			
  			ctx.save();
			//Setup and Save	
			var x = theCanvas.width/2;
			var y = theCanvas.height/2;
			var radius = 75;
			var offset = 50;
			// 


			ctx.beginPath();
			ctx.arc(x, y, radius, 0, 2*Math.PI, false);
			ctx.clip();

			//blue circle
			ctx.beginPath();
			ctx.arc(x-offset, y-offset, radius, 0, 2*Math.PI, false);
			ctx.fillStyle = "blue";
			ctx.fill();

			//yellow circle
			ctx.beginPath();
			ctx.arc(x+offset, y, radius, 0, 2*Math.PI, false);
			ctx.fillStyle = "yellow";
			ctx.fill();

			//red circle
			ctx.beginPath();
			ctx.arc(x, y+offset, radius, 0, 2*Math.PI, false);
			ctx.fillStyle = "red";
			ctx.fill();
				
			//outline the whole shape
			ctx.restore();

			//draw stroke around circles
			ctx.beingPath();
			ctx.arc(x, y, radius, 0, 2*Math.PI, false);
			ctx.lineWidth = 10;
			ctx.strokeStyle = "blue";
			ctx.stroke();
		}
	}
}