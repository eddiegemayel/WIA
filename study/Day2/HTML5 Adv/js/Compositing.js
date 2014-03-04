window.onload = function() {
	var theCanvas = document.getElementById('Canvas1');
	if (theCanvas && theCanvas.getContext) {
	var ctx = theCanvas.getContext("2d");
	if (ctx) {
		
			// Let's create an array of all our compositing methods
			var compMethods = ["source-over", "source-in", "source-out", "source-atop", "lighter", "xor", "destination-over", "destination-in", "destination-out", "destination-atop", "darker", "copy" ];
			
			var method = 0;

			var rects = [
				{x:20 , y:20, width:75, height:75},
				{x:40, y:50, width:75, height:75}
			];

			//create for loop that will draw our rectangles
			for(i=0; i<compMethods.length; i++){
				var cvsName = "Canvas"+(i+1);
				var curCanvas = document.getElementById(cvsName);
				var exampCtx = curCanvas.getContext("2d");

				//setup first rectanlges
				exampCtx.fillStyle = "blue";
				exampCtx.fillRect(rects[0].x, rects[0].y, rects[0].width, rects[0].height);
				exampCtx.fillStyle ="green";
				exampCtx.fillRect(rects[1].x, rects[1].y, rects[1].width, rects[1].height);

				exampCtx.globalCompositeOperation = compMethods[i++];

			}
			
					
											
		}
	}
}