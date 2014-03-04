//load scripts based on modernizr results

Modernizr.load({
	test: Modernizr.inputtypes.date,
	yep: "js/success.js",
	nope:"js/fail.js",
	complete: function(){
		
	}

});