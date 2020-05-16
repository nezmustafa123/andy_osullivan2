$(document).ready(function(){
    
$('.client-carousel').owlCarousel({
        loop: true,
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

    $('.js--section-features').waypoint(function (direction) {
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



    //$('.js--wp-1').waypoint(function(direction) {
    //	//dont put direction because it will only happen once
    //	
    //	$('.js--wp-1').addClass('animated fade');
    //}, {
    //	offset: '50%';
    //});
    //
    //

   

        //	var nav = $('.js--main-nav');

        //	nav.slideToggle(200);
      var counter = 0;
        $("#item").hover(
            function () {
                if(counter === 0) {
                    $("#public-speaking-dropdown").css("display", "block");
                    $("#public-speaking-dropdown").fadeIn();
                    counter = 1;
                }
                
                else {
                 
                    $("#public-speaking-dropdown").fadeOut();
                    counter = 0;
                }
                
            }
        );

        $("#item.fade").hover(function () {
            $("#public-speaking-dropdown").fadeOut(100);
            $("#public-speaking-dropdown").fadeIn(500);
        });

    });
