function resizeContainers()
{
    var containerWidth   = jQuery('.box-container').width(),
		$boxOne          = jQuery('.box-container .box-one'),
		$boxHeight       = Math.floor($boxOne.width() / 2),
		$bottomBox       = jQuery('.bottom-box');
	
	$bottomBox.css({'width':containerWidth});
	
	jQuery('.box-container').children().not(".mainpage-navigation").each(function() {
		jQuery(this).css({'height':$boxHeight});
	});
}
	
jQuery(window).on('load resize', function() {
    resizeContainers();
});

jQuery( document ).ready( function( $ ) {
    
    'use-strict';
    // hover on homepage
	(function() {
		$('#big_box .right-container')
			.on('mouseenter', '.box-item', function () {
				$('.box-item').children('img').addClass('desaturate');
				$(this).children('img').removeClass('desaturate');	
			})
			.on('mouseleave', function () {
				$('.box-item').children('img').removeClass('desaturate');
			});
	})();
	
	$( document.body ).on( 'post-load', function () {
       resizeContainers(); 
    });
     
    // remove borders
    jQuery('ul.menu li:not(.poststrigger02, .poststrigger)').children('ul.sub-menu').not('.bebel-mega-sub-menu').each(function() { jQuery(this).children().last().css('border', 'none'); });
});

jQuery(window).on('load resize', function() {

	if(jQuery(window).width() > 1024 && !jQuery( "body" ).is( ".horizontal-menu" ) ) {
            if(bebel.menu_hide)
            {
		jQuery('.navbtn').removeClass('clicked');
		jQuery('.absolute-box').css({'position':'relative', 'top':0, 'left': -165, 'z-index':10, 'width':jQuery(window).width()});
		jQuery('.navbtn').unbind('click').on('click', function() {
			jQuery( this ).toggleClass('clicked');
			if(jQuery( this ).is( '.clicked' ) ) {
				jQuery('.absolute-box').css({'position':'relative', 'top':0}).animate({'left': 0, 'z-index':0, 'width':'100%'}, 300);
			} else {
				jQuery('.absolute-box').css({'position':'relative', 'top':0, 'z-index':10}).animate({'left': -165, 'width':jQuery(window).width()}, 300);
			}
		});
            }
	} else if(jQuery( "body" ).is( ".horizontal-menu" ) ) {
		jQuery('.top-box').css({'position':'absolute', 'z-index':10, 'right':'0', 'top':'0', 'width': jQuery(window).width() - 165});
		jQuery('.horizontal-menu .site-menu.pages').css({'margin-left':20});
		jQuery('.navbtn img').css({'position':'relative', 'z-index':11});
		jQuery('.navbtn').unbind('click').on('click', function() {
			jQuery( this ).toggleClass('clicked');
			if(jQuery( this ).is( '.clicked' ) ) {
				jQuery('.top-box').animate({'opacity':0}, 300, function() {
					jQuery(this).css({'display':'none'});
					jQuery('.absolute-box').css({'position':'relative', 'top':0, 'left': 0, 'z-index':0, 'width':'100%'});
				});
			} else {
				jQuery('.top-box').css({'display':'block'}).animate({'opacity':1}, 300);
				jQuery('.absolute-box').css({'position':'relative', 'top':0, 'left': 0, 'z-index':0, 'width':'100%'});
			}
		});
		jQuery('ul.menu li.poststrigger02').hover(
			function() {
                                jQuery(this).css({'background':'url('+bebel.theme_url+'/images/menu01-arrow.png) center right no-repeat'});
				jQuery(this).children('a').stop().css({'color':'#fff'});
				jQuery(this).children('ul.sub-menu.special02').stop().css({'display':'block'}).animate({'opacity':'1'}, 300);
			}, function() {
				jQuery(this).children('a').stop().css({'color':'#939393'});
				jQuery(this).find('ul.sub-menu.special02').stop().animate({'opacity':'0'}, 300, function() {
					jQuery(this).css({'display':'none'});
				});
			}
		);
	} else if( jQuery(window).width() <= 768 ) {
		jQuery('.navbtn').unbind('click').on('click', function() {
			jQuery('.site-menu .menu').slideToggle();
		});
		jQuery('.absolute-box').css({'position':'relative', 'top':0, 'left': 0, 'z-index':0, 'width':jQuery(window).width()});
	} else {
		jQuery('.absolute-box').css({'position':'relative', 'top':0, 'left': 0, 'z-index':0, 'width':jQuery(window).width()});
	}
	
	if(jQuery(window).width() > 1024 && !jQuery( "body" ).is( ".horizontal-menu" ) ) {
		jQuery('ul.menu li.poststrigger, ul.menu li.poststrigger02').unbind('mouseenter mouseleave');
		jQuery('ul.menu li.poststrigger').hover(
			function() {
                                var previousCss  = jQuery(this).find('ul.sub-menu.special').attr("style");
                                
                                jQuery(this).find('ul.sub-menu.special02')
                                .css({
                                    visibility: 'hidden',
                                    display:    'block',
                                });
                                
                                var height = 0;
                                var menuVar = jQuery(this).find('ul.sub-menu.special');
                                
                                menuVar.children("li").each(function() {
                                    height = jQuery(this).height()+height;
                                });
                                menuHeight = height + 80;
                                
                                jQuery(this).find('ul.sub-menu.special').attr("style", previousCss ? previousCss : "").css('height', menuHeight);
                            
				jQuery('#header-searchform').hide();
                                $offset = jQuery(this).offset();
                                jQuery(this).append('<img src="'+bebel.theme_url+'/images/menu01-arrow.png" class="push_submenu_arrow_small">');
                                jQuery(this).find(".push_submenu_arrow_small").css('top', $offset['top'] - 22);
				jQuery(this).children('a').stop().css({'color':'#fff'});
				jQuery(this).find('ul.sub-menu.special').stop().css({'display':'block'}).animate({'opacity':'1'}, 300);
				jQuery('.right-container').stop().animate({'padding-left':'220px', 'margin-right': '-220px'}, 300);
				jQuery('.navbtn').toggleClass('btn-visibility');
			}, function() {
                            
				jQuery('#header-searchform').show();
				jQuery(this).find(".push_submenu_arrow_small").remove();
				jQuery(this).children('a').stop().css({'color':'#939393'});
				jQuery(this).find('ul.sub-menu.special').stop().animate({'opacity':'0'}, 300, function() {
					jQuery(this).css({'display':'none'});
				});
				jQuery('.right-container').stop().animate({'padding-left':'0', 'margin-right': '0'}, 300);
				jQuery('.navbtn').toggleClass('btn-visibility');
			}
		);
		
		jQuery('ul.menu li.poststrigger02').hover(
			function() {
				jQuery(this).children('a').stop().css({'color':'#fff'});
				jQuery(this).children('ul.sub-menu.special02').stop().css({'display':'block'}).animate({'opacity':'1'}, 300);
                                jQuery(this).children('ul').first().append('<img src="'+bebel.theme_url+'/images/menu02-arrow_white.png" class="popup_submenu_arrow">');
			}, function() {
				jQuery(this).children('a').stop().css({'color':'#939393'});
				jQuery(this).find('ul.sub-menu.special02').stop().animate({'opacity':'0'}, 300, function() {
					jQuery(this).css({'display':'none'});
				});
                                jQuery(this).children('ul').first().find(".popup_submenu_arrow").fadeOut(300, function(){ jQuery(this).remove();});
			}
		);
                jQuery('ul.menu > li:not(.poststrigger02, .poststrigger)').hover(
			function() {
				jQuery(this).children('ul').first().append('<img src="'+bebel.theme_url+'/images/menu02-arrow_white.png" class="popup_submenu_arrow_small">');
			}, function() {
				jQuery(this).children('ul').first().find(".popup_submenu_arrow").fadeOut(300, function(){ jQuery(this).remove();});
			}
		);
                jQuery('ul.menu li:not(.poststrigger02, .poststrigger)').hover(
			function() {
                                jQuery(this).children('ul.sub-menu').not('.bebel-mega-sub-menu').first().hide().stop().css({'display':'block'}).animate({'opacity':'1'}, 300);
			}, function() {
                                jQuery(this).children('ul.sub-menu').not('.bebel-mega-sub-menu').first().stop().animate({'opacity':'0'}, 300, function() {
					jQuery(this).css({'display':'none'});
				});
			}
		);
	} else if(jQuery(window).width() > 768) {
            // hide last child of 
                jQuery('ul.menu li.poststrigger ul li.special02').each(function() {
                    jQuery(this).css('border', 'none');
                });
            
		jQuery('ul.menu li.poststrigger, ul.menu li.poststrigger02').unbind('mouseenter mouseleave');
		jQuery('ul.menu li.poststrigger').hover(
			function() {
                            
                                // add menu arrow
                                
                                jQuery(this).append('<img src="'+bebel.theme_url+'/images/arrow_up_gray.png" class="popup_menu_arrow_up">');
                            
                                var previousCss  = jQuery(this).find('ul.sub-menu.special').attr("style");
                                
                                jQuery(this).find('ul.sub-menu.special')
                                .css({
                                    visibility: 'hidden',
                                    display:    'block',
                                });
                                
                                var maxHeight = 0;
                                var menuVar = jQuery(this).find('ul.sub-menu.special');
                                
                                menuVar.children("li").each(function() {
                                    if (jQuery(this).height() > maxHeight)
                                    {
                                        maxHeight = jQuery(this).height();
                                    }
                                });
                                menuHeight = maxHeight + 80;
                                
                                jQuery(this).find('ul.sub-menu.special').attr("style", previousCss ? previousCss : "").css('height', menuHeight);
                                
                                
				jQuery('#header-searchform').hide();
				jQuery(this).children('a').stop().css({'color':'#fff'});
				menuVar.stop().css({'display':'block'}).animate({'opacity':'1'}, 300);
				jQuery('.right-container').stop().animate({'padding-top': menuHeight}, 300);
			}, function() {
                                jQuery(this).find('.popup_menu_arrow_up').remove();
				jQuery('#header-searchform').show();
				jQuery(this).children('a').stop().css({'color':'#939393'});
				jQuery(this).find('ul.sub-menu.special').stop().animate({'opacity':'0'}, 300, function() {
					jQuery(this).css({'display':'none'});
				});
				jQuery('.right-container').stop().animate({'padding-top':'0'}, 300);
			}
		);
		jQuery('ul.menu li.poststrigger02').hover(
			function() {
                                jQuery(this).append('<img src="'+bebel.theme_url+'/images/arrow_up.png" class="popup_menu_arrow_up">');
				jQuery(this).children('a').stop().css({'color':'#fff'});
				jQuery(this).children('ul.sub-menu.special02').stop().css({'display':'block'}).animate({'opacity':'1'}, 300);
			}, function() {
                                jQuery(this).find('.popup_menu_arrow_up').remove();
				jQuery(this).children('a').stop().css({'color':'#939393'});
				jQuery(this).find('ul.sub-menu.special02').stop().animate({'opacity':'0'}, 300, function() {
					jQuery(this).css({'display':'none'});
				});
			}
		);
	} else {
		jQuery('ul.menu li.poststrigger, ul.menu li.poststrigger02').unbind('mouseenter mouseleave');
		jQuery('ul.menu li.poststrigger').hover(
			function() {
				jQuery('#header-searchform').hide();
				jQuery(this).children('a').stop().css({'color':'#fff'});
				jQuery(this).find('ul.sub-menu.special').stop().css({'display':'block'}).animate({'opacity':'1'}, 300);
			}, function() {
				jQuery('#header-searchform').show();
				jQuery(this).children('a').stop().css({'color':'#939393'});
				jQuery(this).find('ul.sub-menu.special').stop().animate({'opacity':'0'}, 300, function() {
					jQuery(this).css({'display':'none'});
				});
			}
		);
		jQuery('ul.menu li.poststrigger02').hover(
			function() {
                                var previousCss  = jQuery(this).find('ul.sub-menu.special02').attr("style");
                                
                                jQuery(this).find('ul.sub-menu.special02')
                                .css({
                                    visibility: 'hidden',
                                    display:    'block',
                                });
                                
                                var height = 0;
                                var menuVar = jQuery(this).find('ul.sub-menu.special02');
                                
                                menuVar.children("li").each(function() {
                                    height = jQuery(this).height()+height;
                                });
                                menuHeight = height + 80;
                                
                                jQuery(this).find('ul.sub-menu.special02').attr("style", previousCss ? previousCss : "").css('height', menuHeight);
				jQuery(this).children('a').stop().css({'color':'#fff'});
				jQuery(this).children('ul.sub-menu.special02').stop().css({'display':'block'}).animate({'opacity':'1'}, 300);
			}, function() {
				jQuery(this).children('a').stop().css({'color':'#939393'});
				jQuery(this).find('ul.sub-menu.special02').stop().animate({'opacity':'0'}, 300, function() {
					jQuery(this).css({'display':'none'});
				});
			}
		);
	}

	jQuery('.loaded-blog .page-nice-scroll').css({'height':jQuery(window).height() - 200});
	
	if(jQuery.support.fullscreen)
        {
		jQuery('.fullscreen').on('click', function(e){
                    jQuery('.absolute-box').removeClass('bbg');
                    jQuery('.main-left').addClass('fscw').css({'padding':'30px', 'width':'100%', 'box-sizing': 'border-box'});
                    jQuery(this).hide();
                    jQuery(".exit_fullscreen").show();
                    jQuery('.blog-single').fullScreen();
                    return false;
		});
                
                jQuery('.exit_fullscreen').on('click', function(e){
                    jQuery('.blog-single').cancelFullScreen();
                });
                
	}
       
});

jQuery(document).bind('webkitfullscreenchange mozfullscreenchange fullscreenchange', function(e) {
    var state = document.fullScreen || document.mozFullScreen || document.webkitIsFullScreen;
    var event = state ? 'FullscreenOn' : 'FullscreenOff';

    if(event === "FullscreenOff")
    {
        jQuery(".exit_fullscreen").hide();
        jQuery(".fullscreen").show();
        jQuery('.main-left').css({'padding':'0px'});
    }
});

/// only on single pages
jQuery(window).load(function() {
    jQuery( "#font-slider" ).slider({
            value : 1,
            min : 14,
            max : 24,
            step : 1,
            slide: function( event, ui ) {
                    jQuery( ".blog-single article div p" ).css({'line-height':'1.55','font-size':ui.value});
                    // $( "#slider-value" ).html( ui.value );
            }
    });

    jQuery('a.black').on('click', function(){
            jQuery('.absolute-box, .main-left').addClass('bbg');
            return false;
    });
    jQuery('a.white').on('click', function(){
            jQuery('.absolute-box, .main-left').removeClass('bbg');
            return false;
    });

    jQuery('li.options').hover(
            function(){ jQuery('.reading-options-menu').stop().stop().fadeIn(); },
            function(){ jQuery('.reading-options-menu').stop().stop().fadeOut(); }
    );
    
    jQuery('.image-popup').magnificPopup({ 
        type: 'image',
        gallery:{
            enabled:true
        }
    });
    
    jQuery('#portfolio-wrapper').isotope({
			itemSelector : '.portfolio-item',
			layoutMode : 'fitRows'
		});
			
    jQuery('#filters a.selected').trigger("click");
    jQuery('#filters a').click(function(e){
		e.preventDefault();

		var selector = jQuery(this).attr('data-option-value');
		jQuery('#portfolio-wrapper').isotope({ filter: selector });

		jQuery(this).parents('ul').find('a').removeClass('selected');
		jQuery(this).addClass('selected');
	});
        
         
        // add icons to sidebar
        if(bebel.sidebar_icons == 1)
        {
            jQuery('.sidebar-right .widget_recent_entries h3, .footer-inner .widget_recent_entries h3').prepend('<i class="fa fa-file-text-o"></i>');
            jQuery('.sidebar-right .widget_recent_comments h3, .footer-inner .widget_recent_comments h3').prepend('<i class="fa fa-comment"></i>');
            jQuery('.sidebar-right .widget_calendar h3, .footer-inner .widget_calendar h3').prepend('<i class="fa fa-calendar"></i>');
            jQuery('.sidebar-right .widget_tag_cloud h3, .footer-inner .widget_tag_cloud h3').prepend('<i class="fa fa-cloud"></i>');
            jQuery('.sidebar-right .widget_search h3, .footer-inner .widget_search h3').prepend('<i class="fa fa-search"></i>');
            jQuery('.sidebar-right .widget_pages h3, .footer-inner .widget_pages h3').prepend('<i class="fa fa-file-text-o"></i>');
            jQuery('.sidebar-right .widget_rss h3, .footer-inner .widget_rss h3').prepend('<i class="fa fa-file-text-o"></i>');
            jQuery('.sidebar-right .widget_text h3, .footer-inner .widget_text h3').prepend('<i class="fa fa-file-text-o"></i>');
            jQuery('.sidebar-right .widget_archive h3, .footer-inner .widget_archive h3').prepend('<i class="fa fa-file-text-o"></i>');
            jQuery('.sidebar-right .widget_categories h3, .footer-inner .widget_categories h3').prepend('<i class="fa fa-file-text-o"></i>');
            jQuery('.sidebar-right .widget_meta h3, .footer-inner .widget_meta h3').prepend('<i class="fa fa-file-text-o"></i>');
        }
    
});