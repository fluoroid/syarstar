/*!
 * strength.js
 * Original author: @aaronlumsden
 * Further changes, comments: @aaronlumsden
 * Licensed under the MIT license
 */
;(function ( $, window, document, undefined ) {

    var pluginName = "tabulous",
        defaults = {
            effect: 'scale'
        };

       // $('<style>body { background-color: red; color: white; }</style>').appendTo('head');

    function Plugin( element, options ) {
        this.element = element;
        this.$elem = $(this.element);
        this.options = $.extend( {}, defaults, options );
        this._defaults = defaults;
        this._name = pluginName;
        this.init();
        this.t_resize();
    }

    Plugin.prototype = {

        init: function() {

            var links = this.$elem.find('a');
            var firstchild = this.$elem.find('li:first-child').find('a');
            var lastchild = this.$elem.find('li:last-child').after('<span class="tabulousclear"></span>');

            if (this.options.effect == 'scale') {
                 tab_content = this.$elem.find('div').not(':first').not(':nth-child(1)').addClass('hidescale');
            } else if (this.options.effect == 'slideLeft') {
                 tab_content = this.$elem.find('div').not(':first').not(':nth-child(1)').addClass('hideleft');
            } else if (this.options.effect == 'scaleUp') {
                 tab_content = this.$elem.find('div').not(':first').not(':nth-child(1)').addClass('hidescaleup');
            } else if (this.options.effect == 'flip') {
                 tab_content = this.$elem.find('div').not(':first').not(':nth-child(1)').addClass('hideflip');
            }

            var firstdiv = this.$elem.find('#tabs_container');
            var firstdivheight = firstdiv.find('div:first').height();

            var alldivs = this.$elem.find('div:first').find('div');

            alldivs.css({'position': 'absolute','top':'40px'});

            firstdiv.css('height',firstdivheight+'px');

            firstchild.addClass('tabulous_active');

            links.bind('click', {myOptions: this.options}, function(e) {
                e.preventDefault();

                var $options = e.data.myOptions;
                var effect = $options.effect;

                var mythis = $(this);
                var thisform = mythis.parent().parent().parent();
                var thislink = mythis.attr('href');


                firstdiv.addClass('transition');

                links.removeClass('tabulous_active');

				var className = $(this).attr('class');
				var className2 = $(this).attr('href');
				if(className == 'notR') {
					if(className2.match(/1$/)){
						$('#tabs ul li:nth-child(1) a').addClass('tabulous_active');
					}else if(className2.match(/2$/)){
						$('#tabs ul li:nth-child(2) a').addClass('tabulous_active');
					}else if(className2.match(/3$/)){
						$('#tabs ul li:nth-child(3) a').addClass('tabulous_active');
					}else if(className2.match(/4$/)){
						$('#tabs ul li:nth-child(4) a').addClass('tabulous_active');
					}else if(className2.match(/5$/)){
						$('#tabs ul li:nth-child(5) a').addClass('tabulous_active');
					}else if(className2.match(/6$/)){
						$('#tabs ul li:nth-child(6) a').addClass('tabulous_active');
					}else if(className2.match(/7$/)){
						$('#tabs ul li:nth-child(7) a').addClass('tabulous_active');
					}else if(className2.match(/8$/)){
						$('#tabs ul li:nth-child(8) a').addClass('tabulous_active');
					}
				}else{
					mythis.addClass('tabulous_active');
				}
                thisdivwidth = thisform.find('div'+thislink).height();

                if (effect == 'scale') {
                    alldivs.removeClass('showscale').addClass('make_transist').addClass('hidescale');
                    thisform.find('div'+thislink).addClass('make_transist').addClass('showscale');
                } else if (effect == 'slideLeft') {
                    alldivs.removeClass('showleft').addClass('make_transist').addClass('hideleft');
                    thisform.find('div'+thislink).addClass('make_transist').addClass('showleft');
                } else if (effect == 'scaleUp') {
                    alldivs.removeClass('showscaleup').addClass('make_transist').addClass('hidescaleup');
                    thisform.find('div'+thislink).addClass('make_transist').addClass('showscaleup');
                } else if (effect == 'flip') {
                    alldivs.removeClass('showflip').addClass('make_transist').addClass('hideflip');
                    thisform.find('div'+thislink).addClass('make_transist').addClass('showflip');
                }


                firstdiv.css('height',thisdivwidth+'px');

                


            });

          

         
            
        },
		
        // resize
        t_resize: function() {
            $(window).on('load resize', function() {
                var firstdiv = $('#tabs_container');
                var mythis = $('.tabulous_active');
                var thislink = mythis.attr('href');
                var thisform = mythis.parent().parent().parent();
                var thisdivwidth = thisform.find('div'+thislink).height();
                firstdiv.addClass('transition').css('height',thisdivwidth+'px');          
            });
        }
    };

    // A really lightweight plugin wrapper around the constructor,
    // preventing against multiple instantiations
    $.fn[pluginName] = function ( options ) {
        return this.each(function () {
            new Plugin( this, options );
        });
    };

})( jQuery, window, document );


