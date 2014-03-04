window.onload = function(){
	if(!createjs.Sound.initializeDefaultPlugins()){return;}

	//create a variable to hold the relative path to the audio files
	//if moving files, you only have to update one place instead of each and every music link

	var audioPath = "audio/";

	//SoundJS accepts an array of objects that represent individual audio instances
	// this is called a manifest

	//create our manifest here
	var manifest = [
		{id:"Music", src:audioPath+"music.mp3|"+audioPath+"music.ogg"},
		{id:"Thunder", src:audioPath+"Thunder1.mp3|"+audioPath+"Thunder1.ogg"}
	];

	//create an event listener

	createjs.Sound.addEventListener("fileload", handleLoad);

	//register our manifest with soundJS 
	createjs.Sound.registerManifest(manifest);

	function handleLoad(event){
		//happens once when the sound is initially loaded
		//per sound

		createjs.Sound.play(event.src);
	}
}
function playMusic(){
	createjs.Sound.play("Music");
}

function playThunder(){
	createjs.Sound.play("Thunder");
}