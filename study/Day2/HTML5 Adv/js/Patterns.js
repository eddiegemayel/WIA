window.onload = function() {
	var theCanvas = document.getElementById('Canvas1');
	if (theCanvas && theCanvas.getContext) {
	var ctx = theCanvas.getContext("2d");
	if (ctx) {
			/*

			//create a pattern from an image

			var patImg = new Image();

			//wait for image to load

			patImg.onload = function(){
				//now you can use the image as a pattern cus its loaded now
				ctx.fillStyle = ctx.createPattern(patImg, "repeat-y");

				ctx.fillRect(0,0, ctx.canvas.width, ctx.canvas.height);

			};				
				
			patImg.src = "images/desert_desc_bug.gif";

			*/

			//create pattern from another canvas yo

			//setup our pattern canvas

			var patCanvas = document.getElementById("patCan");

			var patCtx = patCanvas.getContext("2d");

			if(patCtx){
				// draw a line across the canvas

				patCtx.strokeStyle = "red";
				patCtx.lineWidth = 1;
				patCtx.beginPath();
				patCtx.moveTo(0 , 0);
				patCtx.lineTo(25, 25);
				patCtx.stroke();

				//now we use that canvas as pattern yo. mothafucka

				var strokePat = ctx.createPattern(patCanvas, "repeat");
				ctx.strokeStyle = strokePat;

				ctx.lineWidth = 25;

				ctx.strokeRect(50, 50, 200, 200);
			}

		}
	}
}