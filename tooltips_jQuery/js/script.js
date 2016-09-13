;jQuery(document).ready(function($) {
	$('.input').hover(
		function() {
			$(this).next('.tooltip').stop().fadeIn()
		},
		function() {
			$('.tooltip').stop().fadeOut();
	});


	$('.showHelp').on('click', function() {
		$('.tooltip').fadeIn();
	})
});



