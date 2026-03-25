(function () {
	  "use strict";

	    /* ================ scroll-to-top button ================ */
		  var scrollBtn = document.querySelector('.scrollToTop');

		    function onScroll() {
			    if (!scrollBtn) return;
				    if (window.scrollY > 100) {
					      scrollBtn.style.opacity = '1';
						        scrollBtn.style.pointerEvents = 'auto';
								    } else {
									      scrollBtn.style.opacity = '0';
										        scrollBtn.style.pointerEvents = 'none';
												    }
													  }

													    if (scrollBtn) {
														    // Initial state — hidden
															    scrollBtn.style.opacity = '0';
																    scrollBtn.style.pointerEvents = 'none';
																	    scrollBtn.style.transition = 'opacity 0.4s';

																		    scrollBtn.addEventListener('click', function (e) {
																			      e.preventDefault();
																				        window.scrollTo({ top: 0, behavior: 'smooth' });
																						    });
																							  }

																							    window.addEventListener('scroll', onScroll, { passive: true });

																								  /* ================ close mobile nav on link click ================ */
																								    document.addEventListener('DOMContentLoaded', function () {
																									    var navLinks = document.querySelectorAll('.navbar-collapse a');
																										    var navbarCollapse = document.querySelector('.navbar-collapse');
																											    navLinks.forEach(function (link) {
																												      link.addEventListener('click', function () {
																													          if (window.innerWidth <= 768) {
																															            navbarCollapse.classList.remove('in');
																																		          navbarCollapse.classList.add('collapse');
																																				          }
																																						        });
																																								    });

																																									    // Navbar hamburger toggle
																																										    var toggleBtn = document.querySelector('.navbar-toggle');
																																											    if (toggleBtn && navbarCollapse) {
																																												      toggleBtn.addEventListener('click', function () {
																																													          var isOpen = navbarCollapse.classList.contains('in');
																																															          if (isOpen) {
																																																	            navbarCollapse.classList.remove('in');
																																																				          navbarCollapse.classList.add('collapse');
																																																						          } else {
																																																								            navbarCollapse.classList.add('in');
																																																											          navbarCollapse.classList.remove('collapse');
																																																													          }
																																																															        });
																																																																	    }
																																									  });
																																									  })();
})