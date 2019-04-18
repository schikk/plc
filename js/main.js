$(document).ready(function() {

  if ($('main section').eq(0).hasClass('white-section')) {
    $('.header-menu-btn').addClass('dark-burger');
  }

  // Change color burger menu on scroll
  var offsetsArr = [];
  function changeBurger() {
      for (var i = $('section').length - 1; i >= 0; i--) { offsetsArr[i] = $('section').eq(i).offset().top; }
      var hamburgerOffsetTop = $('.header-menu-btn').offset().top;
      for (var i = 0; i < offsetsArr.length; i++) {
          if (hamburgerOffsetTop < offsetsArr[i + 1]) {
              if ($('section').eq(i).hasClass('white-section') || $('section').eq(i).hasClass('white-section')) { $('.header-menu-btn').addClass('dark-burger'); } else { $('.header-menu-btn').removeClass('dark-burger'); }
              break;
          }
      }
  }
  $(document).scroll(function() {
    changeBurger();
  });

	// Open main menu
	$('.header-menu-btn').click(function(event) {
		$('.header-menu-container').addClass('active');
	});
	$('.close-menu-btn').click(function(event) {
		$('.header-menu-container').removeClass('active');
	});

	// Google map init
   function initFooterMap(lat, lng) {
        // Basic options for a simple Google Map
        var mapOptions = {
            // How zoomed in you want the map to start at (always required)
            zoom: 15,
            scrollwheel: false,
            // The latitude and longitude to center the map (always required)
            center: new google.maps.LatLng(50.239382, 30.545133),
            disableDefaultUI: true,
            draggable: true,
            zoomControl: true,
            styles: [{"stylers":[{"saturation":-100},{"gamma":1}]},{"elementType":"labels.text.stroke","stylers":[{"visibility":"off"}]},{"featureType":"poi.business","elementType":"labels.text","stylers":[{"visibility":"off"}]},{"featureType":"poi.business","elementType":"labels.icon","stylers":[{"visibility":"off"}]},{"featureType":"poi.place_of_worship","elementType":"labels.text","stylers":[{"visibility":"off"}]},{"featureType":"poi.place_of_worship","elementType":"labels.icon","stylers":[{"visibility":"off"}]},{"featureType":"road","elementType":"geometry","stylers":[{"visibility":"simplified"}]},{"featureType":"water","stylers":[{"visibility":"on"},{"saturation":50},{"gamma":0},{"hue":"#50a5d1"}]},{"featureType":"administrative.neighborhood","elementType":"labels.text.fill","stylers":[{"color":"#333333"}]},{"featureType":"road.local","elementType":"labels.text","stylers":[{"weight":0.5},{"color":"#333333"}]},{"featureType":"transit.station","elementType":"labels.icon","stylers":[{"gamma":1},{"saturation":50}]}]
            
        };

        var mapElement = document.getElementById('contacts_map');

        // Create the Google Map using out element and options defined above
        var map = new google.maps.Map(mapElement, mapOptions);
        var image = 'img/elements/map-icon.svg';

        // Define the Lattitude and Longitude for the map location
        var myLatLng = new google.maps.LatLng(50.239382, 30.545133);

        // Define the map marker characteristics
        var mapMarker = new google.maps.Marker({
            position: myLatLng,
            map: map,
            title: '',
            icon: image
        });
    }

    if (document.getElementById('contacts_map')) google.maps.event.addDomListener(window, 'load', initFooterMap(50.239382, 30.545133));

  // Form feedback validation

  $('.plc-form-init-btn').click(function(event) {
    event.preventDefault();
    $('.feedback-form-container').addClass('active');
    $('body').addClass('overflow');
  });

  $('.close-menu-btn').click(function(event) {
    $('.feedback-form-container').removeClass('active');
    $('body').removeClass('overflow');
  });

  function sendContactsForm() {
    var inputs = $('.forms-input');
    var nameInput = $('#client-name');
    var phoneInput = $('#client-phone');
    var form = $('#form-feedback');
    var formWrapper = $('.feedback-form-wrapper');
    var submitBtn = $('#order-button');
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

  sendContactsForm();

  // Gallery
    var defaultImages = [
        'img/frontpage/main-slider/slide1.jpg',
        'img/frontpage/main-slider/slide2.jpg',
        'img/frontpage/main-slider/slide3.jpg'
    ];

    function galleryModal() {
        var modal = $('.gallery-modal'),
            galleryList = $('.gallery-modal-slider-list'),
            controlsListConatiner = $('.gallery-modal-slider-controls'),
            controlsList = controlsListConatiner.children('ul'),
            closeBtn = modal.find('.close-gallery-modal');

        // Functions
        function moveTo(index) {
            var galleryListItem = galleryList.children('li');
            var control = controlsList.children('li');
            var itemsCount = galleryListItem.length;

            if (index < 0) {
                centerControl(itemsCount - 1);
                galleryListItem.removeClass('active').eq(itemsCount - 1).addClass('active');
                control.removeClass('active').eq(itemsCount - 1).addClass('active');
                galleryList.css('transform', 'translateX(-'+(itemsCount - 1)*100+'vw)');
            }
            else if (index > itemsCount - 1) {
                centerControl(0);
                galleryListItem.removeClass('active').eq(0).addClass('active');
                control.removeClass('active').eq(0).addClass('active');
                galleryList.css('transform', 'translateX(0)');
            } else {
                centerControl(index);
                galleryListItem.removeClass('active').eq(index).addClass('active');
                control.removeClass('active').eq(index).addClass('active');
                galleryList.css('transform', 'translateX(-'+index*100+'vw)');
            }
        }

        function moveNext() {
            var control = controlsList.children('li');
            var currentIndex = control.filter('.active').index();
            moveTo(currentIndex + 1);
        }

        function movePrev() {
            var control = controlsList.children('li');
            var currentIndex = control.filter('.active').index();
            moveTo(currentIndex - 1);
        }

        function centerControl(index) {
            var galleryListItem = galleryList.children('li');
            var control = controlsList.children('li');
            var controlOffset = control.eq(index).offset().left,
                controlPosition = control.eq(index).position().left,
                windowWidth = controlsListConatiner.outerWidth(),
                controlWidth = control.outerWidth(),
                currentIndex = galleryListItem.filter('.active').index();

            if (controlOffset > windowWidth/2) {
                controlsList.css('transform', 'translateX(-'+(index*controlWidth - windowWidth/2 + controlWidth/2)+'px)');
            }
            else if (currentIndex > index && controlOffset < windowWidth/2 && controlPosition > windowWidth/2) {
                controlsList.css('transform', 'translateX(-'+(index*controlWidth - windowWidth/2 + controlWidth/2)+'px)');
            } else {
                controlsList.css('transform', 'translateX(0)');
            }
        }

        function openModal() {
            $('.header-menu-container').removeClass('active');
            $('.mobile-header-menu').removeClass('active');
            $('body').addClass('overflow');
            modal.addClass('visible');
        }

        function closeModal() {
            modal.removeClass('visible');
            $('body').removeClass('overflow');
        }

        // Events
        $('body').on('click', '.gallery-modal-slider-controls > ul > li', function() {
            moveTo($(this).index());
        });

        galleryList.on('swipeleft', function(event) {
            moveNext();
        });

        galleryList.on('swiperight', function(event) {
            movePrev();
        });

        $('.gallery-button').on('click', function(event) {
            event.preventDefault();

            var images = eval($(this).data('images'));

            galleryList.html('');
            controlsList.html('');
            images.map(function(el, index) {
                galleryList.append('<li><img src="'+el+'"></li>');
                controlsList.append('<li><img src="'+el+'"></li>');
            });

            var galleryListItem = galleryList.children('li');
            var control = controlsList.children('li');

            galleryListItem.eq(0).addClass('active');
            control.eq(0).addClass('active');
            galleryList.css('transform', 'translateX(0)');
            controlsList.css('transform', 'translateX(0)');

            openModal();
        });

        galleryList.on('click', function(event) {
            if (event.pageX > $(window).outerWidth()/2) {
                moveNext();
            } else {
                movePrev();
            }
        });
        galleryList.on('mousemove', function(event) {
            if (event.pageX > $(window).outerWidth()/2) {
                $(this).removeClass('left').addClass('right');
            } else {
                $(this).removeClass('right').addClass('left');
            }
        });

        closeBtn.on('click', function(event) {
            event.preventDefault();
            closeModal();
        });
        
        $('.gallery-modal-menu-btn').click(function(event) {
            $(this).toggleClass('active');
            $('.gallery-modal-category-menu-list').slideToggle();
        });
    }

    galleryModal();

});