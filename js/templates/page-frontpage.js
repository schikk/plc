$(document).ready(function() {

	// Waves animation init
	if ( $(window).width() > 767 ){
		wavesAnimate('#waves');
		wavesAnimate('#waves2');
	};
	
  	// Intro slider
	function introSlider(id) {
	    var container = $(id),
	        sliderContainer = container.find('.intro-slider-container'),
	        sliderList = container.find('.intro-slider-list'),
	        sliderListItem = sliderList.children('li'),
	        sliderListItemContentClass = '.intro-slider-content',
	        sliderListItemVideo = sliderListItem.find('video'),
	        controlsContainer = container.find('.intro-slider-controls-container'),
	        control = container.find('.intro-slider-dots-list > li'),
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
   

	    sliderList.on('swipeleft', function(event) {
	        moveNext();
	    });

	    sliderList.on('swiperight', function(event) {
	        movePrev();
	    });

	    // Autoplay
	    var interval = setInterval(function(){
	        moveNext();
	    }, 7000);

	    // Init slider
	    initSlider();
	    $(window).on('resize', function() {
	        initSlider();
	    });
	}
	introSlider('#main-intro-slider');

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
	moveListSlider('#advantages-complex');
	moveListSlider('#last-news');

	// Infrastructure slider
	function infrastructureSlider(id) {
	    var container = $(id),
	        sliderContainer = container.find('.adv-map-descr-container'),
	        sliderList = container.find('.adv-map-descr-list'),
	        sliderListItem = sliderList.children('li'),
	        controlsContainer = container.find('.slider-controls'),
	        control = container.find('.adv-map-pointers-list > li'),
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
	        return sliderContainer.outerWidth();
	    }

	    function getCurrentSlideIndex() {
	        return sliderListItem.filter('.active').index();
	    }

	    function moveTo(index) {
	        sliderList.css('transform', 'translateX(-'+getSlideWidth()*index+'px)');
	        sliderListItem.removeClass('active').eq(index).addClass('active');
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
	        moveTo($(this).index());
	    });

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
	infrastructureSlider('#infrastructure-slider');

	// Progress slider
	function progressSlider(id) {
	    var container = $(id),
	        sliderContainer = container.find('.construction-progress-slider-content'),
	        sliderContainer2 = container.find('.construction-progress-slider-content'),
	        sliderList = container.find('.construction-progress-news-list'),
	        sliderList2 = container.find('.construction-progress-news-list'),
	        sliderListDots = container.find('.construction-progress-news-timeline-list'),
	        sliderListItem = sliderList.children('li'),
	        sliderListItem2 = sliderList2.children('li'),
	        sliderListDotControl = sliderListDots.children('li'),
	        control = container.find('.progress-slider-control'),
	        totalSlides = sliderListItem.length;

	    // Helpers
	    function buildSlider() {
	        var slideWidth = getSlideWidth();
	        sliderListItem.outerWidth(slideWidth[0]);
	        sliderList.outerWidth(slideWidth[0]*totalSlides + 20);
	        sliderListItem2.outerWidth(slideWidth[1]);
	        sliderList2.outerWidth(slideWidth[1]*totalSlides + 20);
	    }

	    function initSlider() {
	        buildSlider();
	        moveTo(0);
	    }

	    function getSlideWidth() {
	        return [sliderContainer.outerWidth(), sliderContainer2.outerWidth()];
	    }

	    function getCurrentSlideIndex() {
	        return sliderListItem.filter('.active').index();
	    }

	    function moveTo(index) {
	        sliderList.css('transform', 'translateX(-'+getSlideWidth()[0]*index+'px)');
	        sliderListItem.removeClass('active').eq(index).addClass('active');
	        sliderList2.css('transform', 'translateX(-'+getSlideWidth()[1]*index+'px)');
	        sliderListItem2.removeClass('active').eq(index).addClass('active');
	        sliderListDots.css('transform', 'translateX(-'+sliderListDotControl.outerWidth()*index+'px)');
	        sliderListDotControl.removeClass('active').eq(index).addClass('active');
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
	        if ($(this).hasClass('left')) {
	            movePrev();
	        } else {
	            moveNext();
	        }
	    });

	    sliderListDotControl.find('.progress-timeline-pointer-outer').on('click', function() {
	        clearInterval(interval);
	        var index = $(this).parent('li').index();
	        moveTo(index);
	    });

	    // Autoplay
	    var interval = setInterval(function(){
	        moveNext();
	    }, 7000);

	    // Init slider
	    initSlider();
	    $(window).on('resize', function() {
	        initSlider();
	    });
	}
	progressSlider('#construction-progress-slider');

	// Mobile adaptation
	if ( $(window).width() < 767 ) {
		$('.project-effectiveness-left-col a').insertAfter('.project-effectiveness-right-col');
		$('.other-advantages .plc-section-bg-overlay').wrapAll('<div class="mobile-adv-wrapper"></div>');
		$('.adv-map-pointers-list').insertAfter('.mobile-adv-wrapper .plc-section-bg-overlay');
		$('.mobile-adv-wrapper').wrapAll('<div class="mobile-adv-wrapper-outer"></div>');
	}

});	