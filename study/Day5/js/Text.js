window.onload = function() {
	var canvas = document.getElementById("canvas1");

	var stage = new createjs.Stage(canvas);

	//create a variable to hold our text

	var sentence = new createjs.Text();

	sentence.text = "This sentence is about nothing...or is it??! Dun Dun Dun";

	//Font properties - most normal CSS
	sentence.font = "bold 30px Times";

	//Pick a color
	sentence.color="blue";

	//text is a display object, it inherits ALL properties of display objects

	sentence.x = 150;
	sentence.y = 50;
	//sentence.rotation = 30;
	
	//Text also has special properties
	//textAlign, left, right, center
	sentence.textAlign = "left";

	//Wrap our text
	sentence.lineWidth = 150;

	//Change the space in between each of the lines
	sentence.lineHeight = 50;

	//stroke the outside of the text
	sentence.outline = true;

	//compact code
	var sentence2 = new createjs.Text("Another sentence of text", "bold 20px Times", "blue");

	//Add to stage next
	stage.addChild(sentence);
	stage.addChild(sentence2);
	stage.update();
}