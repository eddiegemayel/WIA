window.onload = function() {
	var theCanvas = document.getElementById('Canvas1');
	if (theCanvas && theCanvas.getContext) {
	var ctx = theCanvas.getContext("2d");
	if (ctx) {
			var rotation = 0;

			//variable to hold image

			var srcImg = document.getElementById("img1");

			//translate to center of the canvas
			ctx.translate(theCanvas.width/2, theCanvas.height/2);

			//set interval
			/*
			setInterval(function(){
				rotation += 5;
				ctx.clearRect(-75,-75, theCanvas.width, theCanvas.height);

				ctx.rotate(rotation/180 * Math.PI);

				ctx.drawImage(srcImg, -75, -75, 150, 150);



			}, 50);
			*/

			var width =10;
			var height= 20;

			ctx.fillStyle = "green";

			setInterval(function(){

				ctx.fillRect(-75,-75, width, height);
				width+=20;
				height+=20;

			}, 500);

			

						
		}
	}
}