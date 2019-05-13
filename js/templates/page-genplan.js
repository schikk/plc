$(document).ready(function() {

  if (screen.width <= 720) {
    window.location = "category-apartments-filter.php";
  }

  $(".main-genplan-svg a").click(function(e){
       e.preventDefault();
       $('.main-genplan-svg').addClass('linked');
       var 
          href = $(this).attr('xlink:href'),
          timeout = 2000;

      setTimeout(function() {
          $('.page-genplan-general').addClass('off-load');
       }, 1500);
          
       setTimeout(function() {
          //window.open(href, '_self');
          location.href = href;
       }, timeout);
  }) 

  $('.page-section-1').addClass('on-load');                                             

	// Genplan hover
	$('#genplan-link-section1').hover(function() {
		$('.path-part-hover-section-1').addClass('path-part-hovered');
	}, function() {
		$('.path-part-hover-section-1').removeClass('path-part-hovered');
	});
	$('#genplan-link-section2').hover(function() {
		$('.path-part-hover-section-2').addClass('path-part-hovered');
	}, function() {
		$('.path-part-hover-section-2').removeClass('path-part-hovered');
	});
	$('.main-genplan-svg > a').mousemove(function (eventObject) {
          $data_tooltip = $(this).attr("data-description");
           $('.genplan-text').html($data_tooltip)
              .css({ 
                "top" : eventObject.pageY + 0,
                "left" : eventObject.pageX + 20
              })
              .show();
          }).mouseout(function () {
             $('.genplan-text').hide()
              .html("")
              .css({
                  "top" : 0,
                  "left" : 0
              });
      });

    // Filter init
    $('#choose-in-filter-btn').click(function(event) {
    	event.preventDefault();
    	$('.main-header-container').addClass('hidden');
    	$('.filter-overlay').addClass('active');
    });
    $('.close-filter-overlay').click(function(event) {
    	$('.main-header-container').removeClass('hidden');
    	$('.filter-overlay').removeClass('active');
    });

 	// Custom ranges
    var floorRange = new rSlider({
        target: '#slider_floor',
        values: { min: 1, max: 15 },
        step: 1,
        range: true,
        tooltip: true,
        scale: false,
        labels: false,
        set: [1, 15]
    });
    var spaceRange = new rSlider({
        target: '#slider_space',
        values: { min: 30, max: 220 },
        step: 1,
        range: true,
        tooltip: true,
        scale: false,
        labels: false,
        set: [30, 220]
    });
    var roomsRange = new rSlider({
        target: '#slider_rooms',
        values: { min: 2, max: 5 },
        step: 1,
        range: true,
        tooltip: true,
        scale: false,
        labels: false,
        set: [2, 5]
    }); 

     // Reset filter
     $('.filter-reset-btn').click(function() {
        $(':input','#advanced-filter-overlay')
            .not(':button, :submit, :reset, :hidden')
            .val('')
            .removeAttr('checked')
            .removeAttr('selected');
    });

});	