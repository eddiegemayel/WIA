window.onload = function() {
	var theCanvas = document.getElementById('Canvas1');
	if (theCanvas && theCanvas.getContext) {
	var ctx = theCanvas.getContext("2d");
	if (ctx) {
				ctx.save();
				ctx.fillStyle = "blue";
				ctx.fillRect(150, 30, 100, 50);

				//rotate the canvas
				ctx.rotate(.25*Math.PI);	
				ctx.fillRect(150, 30, 100, 50);	

				ctx.restore();

				//translate to the center of the canvas

				ctx.translate(ctx.canvas.width/2, ctx.canvas.height/2);

				var radian = (20/180) * Math.PI;
				ctx.beginPath();
				ctx.moveTo(0,0);
				ctx.lineTo(100, 0);
				ctx.stroke();

				for(var degrees=0; degrees<360; degrees += 20){
					
					ctx.beginPath();
					ctx.moveTo(0,0);
					ctx.lineTo(100, 0);
					ctx.stroke();
					ctx.rotate(radian);
				}
				
		}
	}
}