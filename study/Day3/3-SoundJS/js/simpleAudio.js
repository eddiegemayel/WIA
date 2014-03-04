window.onload = function(){
	//test to see if it initializes properly
	//if not the sound will not play

	//return will stop function where it is
	if(!createjs.Sound.initializeDefaultPlugins()){return;}

	//SoundJS built in ability to preload audio
	//registering the audio with SoundJS
	//Will only preload audio that is supported by browser

	createjs.Sound.registerSound({id:"soundId", src:"audio/music.mp3|audio/music.ogg"});

	//listen for file load to be called

	createjs.Sound.addEventListener("fileload", handleFileLoad);

	function handleFileLoad(event){
		// a sound has been preloaded its ready to go
		console.log("preloaded: ", event.src);

		//play the audio file once its loaded

		createjs.Sound.play(event.src);
	};
}

function playMusic(){
	createjs.Sound.play("soundId");
}