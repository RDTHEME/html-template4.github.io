/************* Main Js File ************************
    Template Name: ziptop
    Author: RDSMART
    Version: 1.0
    Copyright 2018
*************************************************************/


/*------------------------------------------------------------------------------------
    
main.js
=============

01 - Animated Headline 
02 - CounterUp
03 - Barfiller
04 - Portfolio Image

-------------------------------------------------------------------------------------*/


(function ($) {
	"use strict";

	jQuery(document).ready(function ($) {

		
		/* 
		=================================================================
		01 - Animated Headline 
		=================================================================	
		*/

		$(function () {
			$('.caption-inner').animatedHeadline({
				animationType: 'clip'
			});
		})


        /* 
		=================================================================
		02 - CounterUp
		=================================================================	
		*/


    $('.counter').counterUp({
      delay: 10,
      time: 3000
    });

         /* 
		=================================================================
		03 - Barfiller
		=================================================================	
		*/


    $('#bar1').barfiller({
     barColor: '#f03a47'
   });

    $('#bar2').barfiller({
      barColor: '#f03a47'
    });

    $('#bar3').barfiller({
      barColor: '#f03a47'
    });
    $('#bar4').barfiller({
      barColor: '#f03a47'
    });



		/* 
		=================================================================
		04 - Portfolio Image
		=================================================================	
		*/
		

        // IMAGE LOADED JQUERY START     
        $('.grid').imagesLoaded(function () {
              // images have loaded
              //PORTFOLIO START  
              var $grid = $('.grid').isotope({
                itemSelector: '.gallery',
                percentPosition: true,
                masonry: {
                      // use outer width of grid-sizer for columnWidth
                      columnWidth: '.gallery'
                    }
                  })
              // filter items click
              $('.portfolio-filter').on('click', 'li', function () {
                var filterValue = $(this).attr('data-filter');
                $grid.isotope({
                  filter: filterValue
                });
              });
              // filter items on button click
              $('.portfolio-filter').on('click', 'li', function () {
                $(this).addClass('current').siblings().removeClass('current');
              });
              //PORTFOLIO END
            });
          // IMAGE LOADED JQUERY END 



        });


}(jQuery));


