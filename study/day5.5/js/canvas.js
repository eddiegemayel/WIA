window.onload = function() {
	var theCanvas = document.getElementById('Canvas1');
	if (theCanvas && theCanvas.getContext) {
	var ctx = theCanvas.getContext("2d");
	if (ctx) {
ctx.fillStyle="rgb(206,70,86)";
ctx.strokeStyle="rgb(35,31,32)";
ctx.lineWidth=1;
ctx.fillRect(13,9,316,137);
ctx.strokeRect(13,9,316,137);
ctx.fill();
ctx.stroke();

ctx.fillStyle="rgb(206,70,86)";
ctx.lineStyle="rgb(35,31,32)";
ctx.lineWidth=1;
ctx.beginPath();
ctx.moveTo(152,190);
ctx.bezierCurveTo(152,190,307,250,345,194);
ctx.bezierCurveTo(383,137,56,84,152,190);
ctx.fill();
ctx.stroke();			
		}
	}
}