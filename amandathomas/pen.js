
			$( document ).ready(function() {
				$('.md-modal').addClass('md-show');
			});
	  $(function () {
	  $('.md-trigger').on('click', function () {
		$('.md-modal').addClass('md-show');
	  });

	  $('.md-close').on('click', function () {
		$('.md-modal').removeClass('md-show');		console.log('clicked....');		track.play();		
	  });

	});
	//# sourceURL=pen.js
		