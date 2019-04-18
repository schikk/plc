$(document).ready(function() {
	// Progress chart
	function progressChart() {
		var monolitStatus = $('#progress-monolit').html(),
			facadeStatus = $('#progress-facade').html(),
			amentiesStatus = $('#progress-amenties').html(),
			communicationsStatus = $('#progress-communications').html(),
			totalStatus = $('#progress-total').html();
		$('.total-progress-list > li').each(function(index, el) {
			$('#progress-monolit-chart').css('width', monolitStatus + '%');
			$('#progress-facade-chart').css('width', facadeStatus + '%');
			$('#progress-amenties-chart').css('width', amentiesStatus + '%');
			$('#progress-communications-chart').css('width', communicationsStatus + '%');
			$('#progress-total-chart').css('width', totalStatus + '%');			
		});
	}
  	progressChart();
	// Animated number counter
	var $findme = $('#anim-counts');
	var exec = false;
	// $('.scales-done').addClass('zero-width');
	function Scrolled() {
	  $findme.each(function() {
	    var $section = $(this),
	      findmeOffset = $section.offset(),
	      findmeTop = findmeOffset.top,
	      findmeBottom = $section.height() + findmeTop,
	      scrollTop = $(document).scrollTop(),
	      visibleBottom = window.innerHeight,
	      prevVisible = $section.prop('_visible');

	    if ((findmeTop > scrollTop + visibleBottom) ||
	      findmeBottom < scrollTop) {
	      visible = false;
	    } else visible = true;

	    if (!prevVisible && visible) {
	    	if(!exec){
				$('.count').each(function() {
				  $(this).prop('Counter', 0).animate({
				    Counter: $(this).text()
				  }, {
				    duration: 3000,
				    step: function(now) {
				      $(this).text(Math.ceil(now));
				      exec = true;
				    }
				  });
				});
	      	}
	    }
	    $section.prop('_visible', visible);
	  });

	}

	function Setup() {
	  var $top = $('#top'),
	    $bottom = $('#bottom');

	  $top.height(500);
	  $bottom.height(500);

	    Scrolled();
	}
    Setup();
	
});		