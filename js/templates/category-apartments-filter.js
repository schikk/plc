$(document).ready(function() {
	// Custom select
	$('#sort_select_param').selectize({
	    create: true,
	    sortField: 'text'
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
	// Filter init
    $('.show-param-filter-btn').click(function(event) {
    	event.preventDefault();
    	$('.main-header-container').addClass('hidden');
    	$('.filter-overlay').addClass('active');
    });
    $('.close-filter-overlay').click(function(event) {
    	$('.main-header-container').removeClass('hidden');
    	$('.filter-overlay').removeClass('active');
    });

    // Mobile adaptation
    if ( $(window).width() < 767 ) {
        $('.show-param-filter-btn').insertAfter('.category-apartments-filter h1');
        $('.total-number-filter-ap-result').insertAfter('.filter-range-block-select-floor');
    }

});	