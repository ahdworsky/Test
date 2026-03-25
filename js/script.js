(function () {
	  "use strict";

	    /* ================ scroll-to-top button ================ */
		  var scrollBtn = document.querySelector('.scrollToTop');

		    function onScroll() {
			    if (!scrollBtn) return;
				    if (window.scrollY > 100) {
					      scrollBtn.style.display = 'block';
						      } else {
							        scrollBtn.style.display = 'none';
									    }
										  }

										    if (scrollBtn) {
											    scrollBtn.style.display = 'none';
												    scrollBtn.querySelector('a').addEventListener('click', function (e) {
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
																																																												  }());