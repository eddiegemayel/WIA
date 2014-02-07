window.onload = function(){
	var Canvas1 = document.getElementById("Canvas1");

	if (Canvas1 && Canvas1.getContext) {
		var ctx = Canvas1.getContext("2d");
		if(ctx){
			var img = document.getElementById("img1");
			ctx.drawImage(img, 0, 0);
		}
	}
}