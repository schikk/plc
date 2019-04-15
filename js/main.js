$(document).ready(function() {

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

});