$(document).ready(function() {
	// Slider advantages complex
	function moveListSlider(id) {
	    var container = $(id),
	        sliderContainer = container.find('.store-slider-container'),
	        sliderList = container.find('.move-list'),
	        sliderListItem = sliderList.children('li'),
	        control = container.find('.move-controls'),
	        controlLeft = container.find('.left-control'),
	        controlRight = container.find('.right-control'),
	        totalSlides = sliderListItem.length;

	    // Helpers
	    function buildSlider() {
	        var slideWidth = getSlideWidth();
	        sliderListItem.outerWidth(slideWidth);
	        sliderList.outerWidth(slideWidth*totalSlides + 20);
	    }

	    function initSlider() {
	        buildSlider();
	        moveTo(0);
	    }

	    function getSlideWidth() {
	        return sliderListItem.outerWidth();
	    }

	    function getCurrentSlideIndex() {
	        return sliderListItem.filter('.active').index();
	    }

	    function moveTo(index) {
	        sliderList.css('transform', 'translateX(-'+getSlideWidth()*index+'px)');
	        sliderListItem.removeClass('active').eq(index).addClass('active');
	    }

	    function moveNext() {
	        if (getCurrentSlideIndex() + 1 === totalSlides) {
	            moveTo(0);
	        } else {
	            moveTo(getCurrentSlideIndex() + 1);
	        }
	    }

	    function movePrev() {
	        if (getCurrentSlideIndex() - 1 < 0) {
	            moveTo(totalSlides - 1);
	        } else {
	            moveTo(getCurrentSlideIndex() - 1);
	        }
	    }

	    // Events
	    controlRight.on('click', function(event) {
	    	moveNext();
	    });

	    controlLeft.on('click', function(event) {
	    	movePrev();
	    });

	    // Init slider
	    initSlider();
	    $(window).on('resize', function() {
	        initSlider();
	    });
	}
	moveListSlider('#last-news');
});	
