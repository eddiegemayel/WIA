$(document).ready(function() {
	//capture thumbnail links and disable them
	$(".gallery_thumbnails a").click(function(e){
			e.preventDefault();

			//setup variables based on the clicked thumbnai;
			var photo_caption = $(this).attr("title");
			var photo_fullsize = $(this).attr("href");

			//setup preview link for the preview photo
			var photo_preview = photo_fullsize.replace("_fullsize", "_preview");
			// console.log(photo_preview);

			//fadeout the preview area, preload the new image, and fade the preview are back in

			$(".gallery_caption").slideUp(500);

			$(".gallery_preview").fadeOut(500, function(){
				//the preview area is now faded and cannot be seen

				//switch the picture
				$(".gallery_preload_area").html('<img src="'+ photo_preview +'"/>');

				//once the image is preloaded then run a function

				$(".gallery_preload_area img").imgpreload(function(){
					//Change the link to the full size photo

					$(".gallery_preview").html('<a class="overlayLink" title="'+ photo_caption + '" href = "' + photo_fullsize + '" style="background-image: url('+ photo_preview + ');"></a>');

					//fade back in
					$(".gallery_preview").fadeIn(500);

					//captions
					$(".gallery_caption").html('<p><a class="overlayLink zoom" title="'+ photo_caption + '" href="'+ photo_fullsize + '">View Larger</a></p><p>'+ photo_caption + '</p>');

					$(".gallery_caption").slideDown(500);

					setFancyBoxLinks();

					updateThumbnails();
				});

			});
	});

	//setup initial parameters
	var first_photo_caption = $(".gallery_thumbnails a").first().attr("title");
	var first_photo_fullsize = $(".gallery_thumbnails a").first().attr("href");
	var first_photo_preview = first_photo_fullsize.replace("_fullsize", "_preview");

	$(".gallery_preview").html('<a class="overlayLink" title="'+ first_photo_caption + '" href = "' + first_photo_fullsize + '" style="background-image: url('+ first_photo_preview + ');"></a>');

	$(".gallery_caption").html('<p><a class="overlayLink zoom" title="'+ first_photo_caption + '" href="'+ first_photo_fullsize + '">View Larger</a></p><p>'+ first_photo_caption + '</p>');

	setFancyBoxLinks();

					updateThumbnails();
}); 

function setFancyBoxLinks(){
	//attatch fancybox script to overlay link
	$("a.overlayLink").fancybox({
		"titlePosition":"over",
		"overlayColor": "#000",
		"overlayOpacity": .8,
		"transitionIn" : "elastic",
		"transitionOut" : "elastic",
		"autoScale" : true
	});
}

function updateThumbnails(){
	$(".gallery_thumbnails a").each(function(index){
		if($(".gallery_preview a").attr("href") == $(this).attr("href")){
			$(this).addClass("selected");
			$(this).children().fadeTo(250, .4);
		}
		else{
			$(this).removeClass("selected");
			$(this).children().css("opacity", "1");
		}
	});
}