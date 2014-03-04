if(Modernizr.canvas){
	//canvas works

	var theCanvas = document.getElementById("Canvas1");
	var ctx = theCanvas.getContext("2d");

	ctx.font = "25pt Georgia";
	ctx.fillText("Canvas works", 20, 60);
}
else{
	//no canvas support, fallback content
}

console.log(Modernizr);

if(Modernizr.draganddrop){
	//shit works yo
	ctx.font = "25pt Georgia"
	ctx.fillText("Drag and drop faggot", 20, 120);

}
else{
	//shit doesnt work
}