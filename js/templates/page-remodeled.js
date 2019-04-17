$(document).ready(function() {

	// Comparison
    $(window).on('load', function() {
        $("#visual-impact").twentytwenty({
            default_offset_pct: 0.5, // How much of the before image is visible when the page loads
            orientation: 'horizontal', // Orientation of the before and after images ('horizontal' or 'vertical')
            before_label: 'Before', // Set a custom before label
            after_label: 'After', // Set a custom after label
            no_overlay: true, //Do not show the overlay with before and after
            move_slider_on_hover: false, // Move slider on mouse hover?
            move_with_handle_only: true, // Allow a user to swipe anywhere on the image to control slider movement. 
            click_to_move: true // Allow a user to click (or tap) anywhere on the image to move the slider to that location.
        });
    });

	// Remodeled advantages slider
	function moveListSlider(id) {
	    var container = $(id),
	        sliderContainer = container.find('.certificate-wrapper'),
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
	moveListSlider('#remodeled-advantages-slider');

	// Style images
	function addMetaToImages() {
	    $('.style-img-container').each(function(index, el) {
	        var data = eval($(this).data('markers'));
	        var container = $(this);

	        data.map(function(el, index) {
	            var tipPositionX = +el.x > 50 ? 'left' : 'right';
	            var tipPositionY = +el.y > 50 ? 'top' : 'bottom';
	            var tipPositionClass = tipPositionX + '-' + tipPositionY;
	            container.append('<div class="style-marker" style="left:'+el.x+'%; top:'+el.y+'%"><div class="style-marker-description '+tipPositionClass+'"><h6>'+el.title+'</h6><p>'+el.description+'</p></div></div>')
	        });
	    });
	}

	// Collapsable style info
	function collapsableStyleInfo() {
	    $('.style-info-block > h5 > span').on('click', function() {
	        $(this).parent().next('.style-info-collapsable').slideDown(600);
	    });

	    $('.style-info-collapsable-close').on('click', function(event) {
	        $(this).closest('.style-info-collapsable').slideUp(600);
	    });
	}

	addMetaToImages();
	collapsableStyleInfo();

	// Style tabs
	function styleTabs(id) {
		var styleNav = $(id).find('.comparison-style-nav-list > li'),
			styeList = $(id).find('.styles-list');

		styleNav.eq(0).addClass('active');
		styeList.find('li').eq(0).addClass('active');

		styleNav.click(function(event) {
			var thisIndex = $(this).index();
			styleNav.removeClass('active');
			$(this).addClass('active').next('li').removeClass('active');
			styeList.find('li').removeClass('active');
			styeList.find('li').eq(thisIndex).addClass('active');
		});
		// Style description
		$(id).find('.style-info-block h5').click(function(event) {
			$(this).toggleClass('active');
			$(id).find('.style-info-collapsable').slideToggle();
		});
	}
	styleTabs('#comparison-style1');
	styleTabs('#comparison-style2');

	// About important slider
	function importantSlider(id) {
	    var container = $(id),
	        sliderContainer = container.find('.about-important-left-col'),
	        sliderContainer2 = container.find('.about-important-right-col'),
	        sliderList = container.find('.materials-quality-img-list'),
	        sliderList2 = container.find('.about-important-descr-list'),
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

	    // Init slider
	    initSlider();
	    $(window).on('resize', function() {
	        initSlider();
	    });
	}
	importantSlider('#about-important-slider');

	// Remodeled form validation
  function remodeledForm() {
    var inputs = $('.forms-input');
    var nameInput = $('#client-name-remodeled');
    var phoneInput = $('#client-phone-remodeled');
    var form = $('#form-feedback-remodeled');
    var formWrapper = $('.remodel-price-left-col-form-wrapper');
    var submitBtn = $('#order-button-remodeled');
    var succesMessage = $('.success-mssg');

    function validateName($name) {
      var nameReg = /^[a-zA-Zа-яА-Я ]{2,3000}$/;
      return nameReg.test( $name );
    }

    function validatePhone($phone) {
      var phoneReg = /^[\s()+-]*([0-9][\s()+-]*){6,20}$/;
      return phoneReg.test( $phone );
    }

    phoneInput.mask("+38 000 000 00 00"); 

  // Form AJAX
    form.on('submit', function(event) {
      
      event.preventDefault();

      if (!validateName(nameInput.val() )) {
        nameInput.parent().addClass('invalid');
        setTimeout(function(){
          nameInput.parent().removeClass('invalid');
        }, 3000 );
      }

      if (!validatePhone(phoneInput.val() )) {
        phoneInput.parent().addClass('invalid');
        setTimeout(function(){
          phoneInput.parent().removeClass('invalid');
        }, 3000 );
      }                                              
                 
      if (validateName(nameInput.val()) && validatePhone(phoneInput.val()) ) {
        // Serialize the form data.
        var formData = $(this).serialize();

        // Submit the form using AJAX.
        $.ajax({
            type: 'POST',
            url: $(this).attr('action'),
            data: formData,
        })
      .done(function(response) {
          form[0].reset();
          // open success massamge
          formWrapper.css('display', 'none');
          succesMessage.css('display', 'block');
          setTimeout(function(){
            formWrapper.css('display', 'block');
            succesMessage.css('display', 'none');
          }, 5000);
        })
        .fail(function(data) {
            submitBtn.html('Failed');
        });
      } 
      else {
        if ( validateName(nameInput.val()) == false ){
          nameInput.parent().addClass('invalid');
        }
        if ( validatePhone(phoneInput.val()) == false ){
          phoneInput.parent().addClass('invalid');
        }                          
      }
    });
  };

  remodeledForm();

});	