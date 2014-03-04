var canvas = document.getElementById("canvas");
var ctx = canvas.getContext("2d");

//variable to track frame number
var count = 0;

//variables to track x,y position inside of our sprite sheet
var x;
var y;

//variable for x and y positions on the stage
var xPos = 0;
var yPos = 0;

//load image in
var img = new Image();
img.src = "images/doggy.png";

//wait for it to load
img.onload = draw;

function draw(){
	//call for frame animation, RAF

	//creates a loop so that anytime a frame is ready it will draw itself
	requestAnimationFrame(draw);

	//clear canvas for every frame
	ctx.clearRect(0,0,canvas.width, canvas.height);

	//setup count, x & y variables
	//Sprite Sheet facts
	//columns : 9
	//total images : 150
	//width : 213px
	//height : 201px

	x = (count%9)*213;
	y = Math.floor(count/9) * 201;

	//draw image based on the count
	ctx.drawImage(img, x, y, 213, 201, xPos++, yPos++, 213, 201);

	//increase count --- except antyhing over 150
	if(count==149){
		count = 0;
	}
	else{
		count ++;
	}
}