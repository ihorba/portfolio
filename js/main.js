;(function($){
	"use strict"
	$(document).ready(function() {

		var teamSlider = $('.ba-portfolio__slider');
		teamSlider.slick({
			slide: '.ba-portfolio__slide',
			arrows: true,
			// centerPadding: '0px',
			prevArrow: '.ba-portfolio-prev',
			nextArrow: '.ba-portfolio-next',
			slidesToShow: 3,
			centerMode: true,
			focusOnSelect: true,
			responsive: [
			{
				breakpoint: 480,
				settings: {
					centerMode: true,
					slidesToShow: 1,
					centerPadding: '0px',

				}
			}
			]
		});

		var sliderTotal = teamSlider.slick("getSlick").slideCount,
		sliderTotalEl = $('.ba-portfolio-count__total'),
		sliderCurEl = $('.ba-portfolio-count__current');

		sliderTotalEl.text(sliderTotal);

		teamSlider.on('afterChange', function(event, slick, currentSlide){
			sliderCurEl.text(currentSlide + 1);
		});

		var testSlider1 = $('.ba-testimonials__slider-1');
		testSlider1.slick({
			arrows: false,
		 	infinite: true,
			centerMode: true,
			centerPadding: '0px',
			slidesToShow: 3,
			slidesToScroll: 1,
			focusOnSelect: true,
			asNavFor: '.ba-testimonials__slider-2'

		});

		var testSlider2 = $('.ba-testimonials__slider-2')
		testSlider2.slick({
		slidesToShow: 1,
		slidesToScroll: 1,
		  infinite: true,
		  arrows: false,
		  speed: 500,
		  fade: true,
		  cssEase: 'linear',
		  asNavFor: '.ba-testimonials__slider-1'
		});

	});

	// safari fix
	if (navigator.userAgent.search("Safari") >= 0 && navigator.userAgent.search("Chrome") < 0)
	{
	   document.getElementsByTagName("BODY")[0].className += " safari";
	}

	// Select all links with hashes
	$('a[href*="#"]')
	  // Remove links that don't actually link to anything
	  .not('[href="#"]')
	  .not('[href="#0"]')
	  .click(function(event) {
	    // On-page links
	    if (
	      location.pathname.replace(/^\//, '') == this.pathname.replace(/^\//, '')
	      &&
	      location.hostname == this.hostname
	    ) {
	      // Figure out element to scroll to
	      var target = $(this.hash);
	      target = target.length ? target : $('[name=' + this.hash.slice(1) + ']');
	      // Does a scroll target exist?
	      if (target.length) {
	        // Only prevent default if animation is actually gonna happen
	        event.preventDefault();
	        $('html, body').animate({
	          scrollTop: target.offset().top
	        }, 800, function() {
	          // Callback after animation
	          // Must change focus!
	          var $target = $(target);
	          $target.focus();
	          if ($target.is(":focus")) { // Checking if the target was focused
	            return false;
	          } else {
	            $target.attr('tabindex','-1'); // Adding tabindex for elements not focusable
	            $target.focus(); // Set focus again
	          };
	        });
	      }
	    }
	  });

	  $(document).on('scroll', function () {
	  	var posDoc = $(this).scrollTop();

	  	$('.ba-section').each(function (index, item) {
	  		var topHeader = $(this).offset().top - 50;
	  		var botHeader = topHeader + $(this).height();

	  		if (
	  			posDoc > topHeader &&
	  			posDoc < botHeader
	  			) {
	  			$('.ba-menu__item').removeClass('active');
	  		$('.ba-menu__item').eq(index).addClass('active');
	  	}

	  });
	  });


	})(jQuery);
