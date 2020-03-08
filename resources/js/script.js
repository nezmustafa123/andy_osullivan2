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
		if (direction === "down") {
			$('nav').addClass('sticky');
			
		} else {
			$('nav').removeClass('sticky');
		}
		}, {
			offset: '15%;'
	});

	
	
//scroll

//$('.js--scroll-to-features').click(function() {
//	$('html, body').animate({
//		scrollTop: $('.section-plans').offset().top}, 1000);
//});


//navigation


//$(function(){
//	$('').click(function(){
//		if(location.pathname.replace(/^\//,'') == this.pathname.replace(/^\//,'')&& location.hostname == this.hostname) {
//			
//		}
//	})
//	
//	
//})



//animation on scroll



$('.js--wp-1').waypoint(function(direction) {
	//dont put direction because it will only happen once
	
	$('.js--wp-1').addClass('animate fade');
}, {
	offset: '50%';
});













