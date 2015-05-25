jQuery(window).on('load resize', function() {
	var $containerWidth  = jQuery('.fancy-article').first().parents('.wpb_row').width(),
		$boxHeight       = Math.floor($containerWidth / 2.6);

	jQuery('.fancy-article').each(function() {		
		jQuery(this).css({'height':$boxHeight});
	});
});

jQuery(document).ready(function($) {

	$('.fancy-articles.two.posts')
		.filter(':even').css( 'margin', '-35px -15px 0 -35px' )
		.end()
		.filter(':odd').css( 'margin', '-35px -35px 0 -15px' );

	/* owl slider */
	$(".owl-slider").owlCarousel({
		items      : 1,
		navigation : true,
		pagination: false
	});

	/* owl toggle */
	$(".owl-toggle").owlCarousel({
		items      : 1,
		itemsDesktop : false,
		itemsDesktopSmall : false,
		itemsTablet : [768,1],
		itemsMobile : [480,1]
	});

	/* category widget */
	if($(".cats-post").length)
	{
		$(".cats-post ul.cats li:first-child").addClass("active");
		$(".cats-post ul.posts li").hide();

		var catsClass = $(".cats-post ul.cats li:first-child").attr("class"),
			catsClass = catsClass.split('-')[0],		
			visibleItems = $(".cats-post ul.posts li."+catsClass).filter(':lt(2)').show();

		$(".cats-post ul.cats li").on('click', function() {
			$(".cats-post ul.cats li").removeClass("active");

			var catsClass = $(this).attr("class"),
				catsClass = catsClass.split('-')[0];

			$(this).addClass("active");
			$(".cats-post ul.posts li").hide();
			$(".cats-post ul.posts li."+catsClass).filter(':lt(2)').fadeIn();
		});
	};
	
/* END */
});