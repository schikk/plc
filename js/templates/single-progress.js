$(document).ready(function() {
    // Progress slider
	function progressSlider(id) {
	    var container = $(id),
	        sliderContainer = container.find('.single-progress-slider-inner'),
	        sliderList = container.find('.single-progress-slider-list'),
	        sliderListItem = sliderList.children('li'),
	        sliderListItemVideo = sliderListItem.find('video'),
	        controlsContainer = container.find('.intro-slider-controls-container'),
	        control = container.find('.slider-controls > li'),
	        controlRight = container.find('.right-control'),
	        controlLeft = container.find('.left-control'),
			currentCounter = container.find('.current-progress-slide'),
			totalCounter = container.find('.total-progress-slides');
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
	        currentCounter.html('1');
	        totalCounter.html(totalSlides > 9 ? totalSlides : + totalSlides);
	    }

	    function playSlideVideo(slideIndex) {
	        var currentVideo = sliderListItem.eq(slideIndex).find('video');

	        sliderListItemVideo.each(function(index, video) {
	            video.pause();
	        });

	        if (currentVideo.length) {
	            currentVideo[0].play();
	        }
	    }

	    function getSlideWidth() {
	        return sliderContainer.outerWidth();
	    }

	    function getCurrentSlideIndex() {
	        return sliderListItem.filter('.active').index();
	    }

	    function moveTo(index) {
	        playSlideVideo(index);
	        sliderList.css('transform', 'translateX(-'+getSlideWidth()*index+'px)');
	        sliderListItem.removeClass('active').eq(index).addClass('active');        
	        control.removeClass('active').eq(index).addClass('active');
	        currentCounter.html(index + 1);
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
	    control.on('click', function() {
	        clearInterval(interval);
	        moveTo($(this).index());
	    });

	    controlRight.on('click', function() {
	    	moveNext();
	    });

	    controlLeft.on('click', function() {
	    	movePrev();
	    });	 

	    sliderList.on('swipeleft', function(event) {
	        moveNext();
	    });

	    sliderList.on('swiperight', function(event) {
	        movePrev();
	    });

	    // Init slider
	    initSlider();
	    $(window).on('resize', function() {
	        initSlider();
	    });
	}
	progressSlider('#progress-slider');

});	