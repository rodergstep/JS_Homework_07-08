;jQuery(document).ready(function($) {
	$('.input').hover (
		function() {
			$(this).next('.tooltip').stop().fadeIn()
		},
		function() {
			$('.tooltip').stop().fadeOut();
	});

	$('.input').focus(
		function() {
  		$(this).next('.tooltip').stop().fadeIn(600)
		});

	$('.showHelp').on('click', function() {
		$('.tooltip').fadeIn();
	})
});



