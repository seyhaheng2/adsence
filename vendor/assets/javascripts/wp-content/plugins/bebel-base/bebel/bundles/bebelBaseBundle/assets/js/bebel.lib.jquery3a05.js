/**
 * Start building our own little js library.
 * Feel free to use it as well, as long as the product it is used in is non-commercial.
 * 
 * This class contains all the base elements we use across the library.
 * Not much functionality yet, though.
 * @type @exp;BebelJs
 */
var BebelJs = BebelJs || function(element)
{
    use_strict = true;
    this.element = element;
    
    this.getElement = function() 
    {
        return this.element;
    }
    
    // this function checks if a file exists. very handy for child theme work
    this.fileExists = function(url)
    {
        var http = new XMLHttpRequest();
        http.open('HEAD', url, false);
        http.send();
        
        return http.status!=404 && http.status!=500;
    }
    
    this.toggleActive = function(where, value, highlight)
    {
        jQuery(where).each(function() 
        {
            $li = jQuery(this);
            if($li.hasClass('toggleElementOn'))
            {
                $selector = $li.data('toggleon');
                $value    = $li.data('togglevalue');

                if(value === $value)
                {
                    // show it
                    $li.fadeIn('slow');
                    if(highlight)
                    {
                        jQuery('html, body').animate({
                            scrollTop: jQuery($selector).offset().top
                        }, 200);
                        $li.css('background-color', '#7AD03A').animate({ 'background-color': "transparent" }, "50");
                    }
                }else {
                    $li.fadeOut('slow');
                }
            }
        });
    }
};
/**
 * This class contains all the ajax features for the bebel framework in the
 * front end (??)
 * 
 * @param mixed element
 * @returns mixed
 */
var BebelJsAjax = BebelJsAjax || function(element, atts)
{
    use_strict = true;
    // _b is the parent class BebelJs
    var _b = new BebelJs(element);
    var self = this;
    
    
    var options = jQuery.extend({
        container: false,
        responseContainer: false,
        action: false,
        data: false, 
        type: 'POST',
        dataType: 'html',
        loader: true,
        trigger: false,
        triggerFunction: false,
        query: [],
        cache: false,
    }, atts);
    
    // carry on
    
    this.gatherInfo = function()
    {
        options.container = options.container ? options.container :_b.element.data('ajax-container');
        options.data = options.data ? options.data : _b.element.data('ajax-data');
        options.trigger = options.trigger ? options.trigger : _b.element.data('trigger');
        
        // container element information
        if(options.container)
        {
            $container = jQuery(options.container);
            
            options.responseContainer = options.responseContainer ? options.responseContainer : $container.data('ajax-response');
            options.action = options.action ? options.action : $container.data('ajax-action');
        }else {
            options.responseContainer = options.responseContainer ? options.responseContainer : _b.element.data('ajax-response');
            options.action = options.action ? options.action : _b.element.data('ajax-action');
        }
    }
    
    /**
     * Makes the ajax call and does all the error handling that occurs.
     * 
     * bebel object defined by bebelBase framework or theme.
     */
    this.makeCall = function()
    {
        // gather all the necessary infos for the ajax call
        self.gatherInfo();
        
        
        jQuery.ajax({
            url  : bebel.ajax_url,
            dataType : options.dataType,
            type : options.type,
            data : {
                action      : bebel.prefix+'-'+options.action,
                nonce       : bebel.ajax_nonce,
                data        : options.data,
                query       : options.query
            },
            beforeSend : function( d ) {
                if(options.loader)
                {
                    self.loader('in', options.responseContainer);
                }
            }
        })
        .done( function( response, textStatus, jqXHR ) 
        {
            
            // append changes to response, if type requires to do so
            switch(options.dataType)
            {
                // replace the container's contents
                case 'html':
                    if(options.cache === true)
                    {
                        // if the cache is on, we will prevent further ajax loading of the same
                        // content, until the website is reloaded.
                        // simple, but a very great helper in page load reduction
                        // requires a parent container of the ajax-response container
                        $parent = jQuery(options.responseContainer).parent();
                        $ajax_cache = 'ajax-cache';
                        if(!$parent.find('.'+$ajax_cache).get(0))
                        {
                            // no cache container set up yet. add.
                            $parent.after().append('<div class="'+$ajax_cache+'"></div>');
                        }
                        
                        // next, see what to cache
                        $type = jQuery(options.responseContainer).find('.tab-ajax').data('tab');
                        if(!$parent.find('.'+$ajax_cache).find('.tab-'+$type).get(0))
                        {
                            jQuery('.tab-'+$type).appendTo('.'+$ajax_cache).hide();
                        }
                        
                        // then, check if is in cache
                        $new_type = _b.element.data('ajax-data');
                        if(!$parent.find('.'+$ajax_cache).find('.tab-'+$new_type).get(0))
                        {
                            jQuery(options.responseContainer).html('<div class="tab-ajax tab-'+$new_type+'" data-tab="'+$new_type+'">'+response+'</div>');
                        }else {
                            jQuery(options.responseContainer).html('');
                            $parent.find('.'+$ajax_cache).find('.tab-'+$new_type).appendTo(options.responseContainer).show().css('visibility', 'visible');
                        }
                        
                    }else {
                        // no cache, simply respond as planned.
                        jQuery(options.responseContainer).html(response);
                    }
                    
                    break;
                case 'json':
                    if(response.success === true)
                    {
                        if(response.data.message)
                        {
                            self.show_success(response.data.message);
                        }
                        
                        if(options.trigger)
                        {
                            jQuery(document).trigger(options.trigger, response);
                        }
                        
                        if(options.triggerFunction)
                        {
                            window[options.triggerFunction](response);
                        }
                    }
                    
            }
        })
        .fail( function( jqXHR, textStatus, errorThrown ) 
        {
            console.log( 'AJAX failed', jqXHR.getAllResponseHeaders(), textStatus, errorThrown );
        })
        .then( function( jqXHR, textStatus, errorThrown ) 
        {
            if(options.loader)
            {
               self.loader('out', options.responseContainer);
            }
        });
        
    }
    
    this.loader = function (inout, where)
    {
        if(bebel.is_child === true)
        {
            path = bebel.theme_url+'/images/ajax-loader.gif';
        }else {
            path = bebel.parent_url+'/images/ajax-loader.gif';
        }
        var loader = '<div class="loadwrapper" id="loadindicator"><img src="'+path+'" alt="loading.."></div>';
        
        switch (inout)
        {
            case 'in':
                jQuery(where).addClass('greyed-loading');
                jQuery('.ajax-response').append(loader).find(".loadwrapper").fadeIn();
                break;
                
            case 'out':
            {
                jQuery(where).removeClass('greyed-loading');
                jQuery('.ajax-response').find(".loadwrapper").remove();
                break;
            }
        }
    }
    
    
    
    this.show_success = function (success) { alert(success); }
    this.show_error   = function (error)   { alert(error); }
   
};