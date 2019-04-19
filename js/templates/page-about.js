$(document).ready(function() {

	// Waves animation init
	if ( $(window).width() > 767 ){
		wavesAnimate('#waves');
		wavesAnimate('#waves2');
	};

	// Infrastructure tabs
	function infrastructureTabs() {
		var infrTabBtn = $('.infrastructure-navigation-list > li');
		var infrGeneralList = $('.infrastructure-list > li');
		var infrRestaurantsList = $('.infr-restaurants-list > li');
		var infrProductsList = $('.infr-products-list > li');
		var infrSportsList = $('.infr-sports-list > li');
		var infrParksList = $('.infr-parks-list > li');

		infrTabBtn.click(function(event) {
			infrTabBtn.removeClass('active');
			infrGeneralList.removeClass('active');
			$(this).addClass('active').next('li').removeClass('active');
			if ($(this).hasClass('restaurants-btn')) {
				infrRestaurantsList.addClass('active');
			}
			if ($(this).hasClass('products-btn')) {
				infrProductsList.addClass('active');
			}
			if ($(this).hasClass('sports-btn')) {
				infrSportsList.addClass('active');
			}
			if ($(this).hasClass('parks-btn')) {
				infrParksList.addClass('active');
			}						
		});
	};
	infrastructureTabs();

	// Specifications slider
	function specificationsSlider(id) {
	    var container = $(id),
	        sliderContainer = container.find('.specifications-left-col'),
	        sliderContainer2 = container.find('.specifications-right-col'),
	        sliderList = container.find('.specifications-left-col-list'),
	        sliderList2 = container.find('.specifications-right-col-list'),
	        sliderListItem = sliderList.children('li'),
	        sliderListItem2 = sliderList2.children('li'),
	        sliderListItemVideo = sliderListItem.find('video'),
	        controlsContainer = container.find('.intro-slider-controls-container'),
	        control = container.find('.slider-controls > li'),
	        controlRight = container.find('.right-control'),
	        controlLeft = container.find('.left-control'),
	        totalSlides = sliderListItem.length;

	    // Helpers
	    function buildSlider() {
	        var slideWidth = getSlideWidth();
	        sliderListItem.outerWidth(slideWidth);
	        sliderList.outerWidth(slideWidth*totalSlides + 20);
	        sliderListItem2.outerWidth(slideWidth);
	        sliderList2.outerWidth(slideWidth*totalSlides + 20);	        
	    }

	    function initSlider() {
	        buildSlider();
	        moveTo(0);
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
	        return sliderContainer2.outerWidth();
	    }

	    function getCurrentSlideIndex() {
	        return sliderListItem.filter('.active').index();
	        return sliderListItem2.filter('.active').index();
	    }

	    function moveTo(index) {
	        playSlideVideo(index);
	        sliderList.css('transform', 'translateX(-'+getSlideWidth()*index+'px)');
	        sliderListItem.removeClass('active').eq(index).addClass('active');
	        sliderList2.css('transform', 'translateX(-'+getSlideWidth()*index+'px)');
	        sliderListItem2.removeClass('active').eq(index).addClass('active');	        
	        control.removeClass('active').eq(index).addClass('active');
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

	    // Autoplay
	    // var interval = setInterval(function(){
	    //     moveNext();
	    // }, 7000);

	    // Init slider
	    initSlider();
	    $(window).on('resize', function() {
	        initSlider();
	    });
	}
	specificationsSlider('#specifications-slider');
});	