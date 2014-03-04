window.onload = function() {
	var theCanvas = document.getElementById('Canvas1');
	if (theCanvas && theCanvas.getContext) {
	var ctx = theCanvas.getContext("2d");
	if (ctx) {
			
			//create linear gradiant

			var linGrid = ctx.createLinearGradient(20, 20, 220, 20);

			//add color stops

			linGrid.addColorStop(0, "#f00");
			linGrid.addColorStop(.5, "#00f");
			linGrid.addColorStop(1, "#0f0");

			//create rect now and fill it with gradient
			ctx.fillStyle = linGrid;
			ctx.fillRect(20, 20, 200, 280);

			//radial gradient
			var radGrad = ctx.createRadialGradient(450, 150, 20, 525, 100);

			radGrad.addColorStop(0, "#f00");
			radGrad.addColorStop(.5, "#00f");
			radGrad.addColorStop(1, "#0f0");

			ctx.fillStyle = radGrad;

			//make the circle
			ctx.beginPath();
			ctx.arc(400, 150, 100, 0, 2*Math.PI);
			ctx.fill();

		}
	}
}