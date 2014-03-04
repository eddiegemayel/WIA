window.onload = function() {
	var theCanvas = document.getElementById('Canvas1');
	if (theCanvas && theCanvas.getContext) {
	var ctx = theCanvas.getContext("2d");
	if (ctx) {

		//create a variable to hold the image
			var srcImg = document.getElementById("img1");
			
			//draw that image directly onto the canvas

			ctx.drawImage(srcImg, 0, 0);
     		
     		//scaled down image
     		drawImage(image, x, y, w, h);

     		ctx.drawImage(srcImg, 50, 50, 350, 150);

     		//slicing an image
     		drawImage(image, sourceX, sourceY, sourceWidth, SourceHeight, DestinationX, dy, dw, dh);

     		/*
     		ctx.drawImage(srcImg, 350, 200, 125, 100,
     			50, 50, 250, 200
     			);
			*/

			
			//draw a VIDEO onto the canvas
			//setup an interval function
			//grab each frame from video and paint onto canvas

			var srcVid = document.getElementById("vid1");

			//starts video
			/*srcVid.play();*/

			//interval function
			/*
			setInterval(function(){
				var theCanvas = document.getElementById("Canvas1");
				var ctx = theCanvas.getContext("2d");
				var srcVid = document.getElementById("vid1");
				ctx.drawImage(srcVid, 0, 0);

			}, 16);
			*/

		}
	}
}