(function($){
	$(function() {

		//Initialize the JCarousel
   		 $('.jcarousel').jcarousel({
   		 	//Wrap around to first or last <li>
   		 	wrap: "both"
   		 });

   		 //Previous Button
        $('.jcarousel-control-prev')
        	//When clicked, move back 1 <li>
            .jcarouselControl({
                target: '-=1'
            });

          //Next Button
        $('.jcarousel-control-next')
        	//When clicked, move forward one <li>
            .jcarouselControl({
                target: '+=1'
            });

          //Pagination
        $('.jcarousel-pagination')
        	//Which dot gets highlighted
            .on('jcarouselpagination:active', 'a', function() {
                $(this).addClass('active');
            })
            .on('jcarouselpagination:inactive', 'a', function() {
                $(this).removeClass('active');
            })

            .jcarouselPagination();
    });
 })(jQuery);