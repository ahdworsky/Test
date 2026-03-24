(function($) { 

	"use strict";
	
	
	/* ================ testimonials ================ */
$(document).ready(function() { 
  	$(".owl-carousel").owlCarousel({ 
      
	   loop:true,
		margin:10,
		nav:false,
		responsiveClass:true,
		responsive:{
			0:{
				items:1,
				nav:true
			},
			700:{
				items:2,
				nav:false
			},
			1170:{
				items:2,
				nav:true,
				loop:false
			}
		}
	  
	  
  	}); 
	});	
	
	/* ================ sticky fix ================ */
	
	// $(window).scroll(function() {
	// if ($(this).scrollTop() > 0){  
	// 	$('.header').addClass("sticky");
	// }
	// else{
	// 	$('.header').removeClass("sticky");
	// }
	// });

	
	//Check to see if the window is top if not then display button
	$(window).scroll(function(){

		if ($(this).scrollTop() > 100) {

			$('.scrollToTop').fadeIn();

		} else {

			$('.scrollToTop').fadeOut();

		}

	});


	//Click event to scroll to top
	$('.scrollToTop').click(function(){

		$('html, body').animate({scrollTop : 0},800);

		return false;

	});

	

	 document.addEventListener('DOMContentLoaded', function() {
    var navLinks = document.querySelectorAll('.navbar-collapse a');
    var navbarCollapse = document.querySelector('.navbar-collapse');

    navLinks.forEach(function(link) {
      link.addEventListener('click', function() {
        if (window.innerWidth <= 768) { 
          // Close menu on mobile
          navbarCollapse.classList.remove('in'); // Bootstrap 3
          navbarCollapse.classList.add('collapse');
        }
      });
    });
  });
	
})(jQuery);
