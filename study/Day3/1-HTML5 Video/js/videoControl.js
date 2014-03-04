var vid;

window.onload = function(){
	//link var to video tag
	vid = document.getElementById("vid");
}

//function to control pause and play

function pauseToggle(){
	//test if video if paused or playing
	console.log("Yo its working");

	if(vid.paused){
		vid.play();
	}
	else{
		vid.pause();
	}
}

function clicked(){
	console.log("clicked function");
	//currentTime - current play time in seconds

	vid.currentTime +=2;

}