$('.client-carousel').owlCarousel({
	loop:true,
	margin: 10,
	autoplay: true,
	autoplaySpeed: 1000, 
	responsive: {
		0: {
			items: 1 
		},
		600: {
			items: 3
		},
		1000: {
			items: 5
		}
	}
});

$('.js--section-features').waypoint(function(direction){
		if (direction == "down") {
			$('nav').addClass('sticky');
			
		} else {
			$('nav').removeClass('sticky');
		}
		}, {
			offset: '15%;'
	});

	
	
	











