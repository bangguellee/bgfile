$(function () {
    
    // animate-box
	/*var contentWayPoint = function() {

		$('.animate-box').waypoint( function( direction ) {

			if( direction === 'down' && !$(this).hasClass('animated') ) {
			
				$(this.element).addClass('fadeInUp animated');
			
			}

		} , { offset: '75%' } );

	};*/
    
    
    


    
    
	// Burger Menu
	var burgerMenu = function() {

		$('body').on('click', '.js-fh5co-nav-toggle', function(event){

			if ( $('#navbar').is(':visible') ) {
				$(this).removeClass('active');	
			} else {
				$(this).addClass('active');	
			}

			event.preventDefault();
			
		});

	};


	// Reflect scrolling in navigation
	var navActive = function(section) {

		var $el = $('#navbar > ul');
		$el.find('li').removeClass('active');
		$el.each(function(){
			$(this).find('a[data-nav-section="'+section+'"]').closest('li').addClass('active');
		});

	};


	// Window Scroll
	var windowScroll = function() {
		var lastScrollTop = 0;
       /* $(window).resize(function(){
            console.log($(window).width())
        })*/

		$(window).scroll(function(event){
             /*console.log($(this).scrollTop());*/

		   	var header = $('#fh5co-header'),
				scrlTop = $(this).scrollTop();
            
			if ( scrlTop > 500 && scrlTop <= 2000 ) {
				header.addClass('navbar-fixed-top fh5co-animated slideInDown');
			} else if ( scrlTop <= 500) {
				if ( header.hasClass('navbar-fixed-top') ) {
					header.addClass('navbar-fixed-top fh5co-animated slideOutUp');
					setTimeout(function(){
						header.removeClass('navbar-fixed-top fh5co-animated slideInDown slideOutUp');
					}, 100 );
				}
			} 
			
		});
	};
    



	// Animations

	// About Us
	var aboutAnimate = function() {

		if ( $('#about-us').length > 0 ) {	
			$('#about-us .to-animate').each(function( k ) {
				
				var el = $(this);
				
				setTimeout ( function () {
					el.addClass('fadeInUp animated');
				},  k * 200, 'easeInOutExpo' );
				
			});
		}

	};

	// Team
	var teamAnimate = function() {

		if ( $('#team').length > 0 ) {	
			$('#team .to-animate').each(function( k ) {
				
				var el = $(this);
				
				setTimeout ( function () {
					el.addClass('fadeInUp animated');
				},  k * 200, 'easeInOutExpo' );
				
			});
		}

	};
	var teamWayPoint = function() {

		if ( $('#team').length > 0 ) {
			$('#team').waypoint( function( direction ) {
										
				if( direction === 'down' && !$(this).hasClass('animated') ) {


					setTimeout(teamAnimate, 200);

					
					$(this.element).addClass('animated');
						
				}
			} , { offset: '95%' } );
		}

	};

	// Services
	var servicesAnimate = function() {

		if ( $('#fh5co-our-services').length > 0 ) {	
			$('#fh5co-our-services .to-animate').each(function( k ) {
				
				var el = $(this);
				
				setTimeout ( function () {
					el.addClass('fadeInUp animated');
				},  k * 200, 'easeInOutExpo' );
				
			});
		}

	};
	var servicesWayPoint = function() {

		if ( $('#fh5co-our-services').length > 0 ) {
			$('#fh5co-our-services').waypoint( function( direction ) {
										
				if( direction === 'down' && !$(this).hasClass('animated') ) {


					setTimeout(servicesAnimate, 200);

					
					$(this.element).addClass('animated');
						
				}
			} , { offset: '95%' } );
		}

	};


	// Features
	var featuresAnimate = function() {

		if ( $('#fh5co-features').length > 0 ) {	
			$('#fh5co-features .to-animate').each(function( k ) {
				
				var el = $(this);
				
				setTimeout ( function () {
					el.addClass('fadeInUp animated');
				},  k * 200, 'easeInOutExpo' );
				
			});
		}

	};
	var featuresWayPoint = function() {

		if ( $('#fh5co-features').length > 0 ) {
			$('#fh5co-features').waypoint( function( direction ) {
										
				if( direction === 'down' && !$(this).hasClass('animated') ) {


					setTimeout(function(){
						$('.animate-features-1').addClass('animated fadeIn');
					}, 100);
					setTimeout(function(){
						$('.animate-features-2').addClass('animated fadeIn');
					}, 200);
					setTimeout(featuresAnimate, 500);
					setTimeout(function(){
						$('.animate-features-3').addClass('animated fadeInUp');
					}, 1400);

					
					$(this.element).addClass('animated');
						
				}
			} , { offset: '95%' } );
		}

	};


	// testimonials
	var testimonialsAnimate = function() {

		if ( $('#fh5co-testimonials').length > 0 ) {	
			$('#fh5co-testimonials .to-animate').each(function( k ) {
				
				var el = $(this);
				
				setTimeout ( function () {
					el.addClass('fadeInUp animated');
				},  k * 200, 'easeInOutExpo' );
				
			});
		}

	};
	var testimonialsWayPoint = function() {

		if ( $('#fh5co-testimonials').length > 0 ) {
			$('#fh5co-testimonials').waypoint( function( direction ) {
										
				
					setTimeout(testimonialsAnimate, 200);
					
					
					$(this.element).addClass('animated');
						
			
			} , { offset: '95%' } );
		}

	};

	// Pricing
	var pricingAnimate = function() {

		if ( $('#fh5co-pricing').length > 0 ) {	
			$('#fh5co-pricing .to-animate').each(function( k ) {
				
				var el = $(this);
				
				setTimeout ( function () {
					el.addClass('fadeInUp animated');
				},  k * 200, 'easeInOutExpo' );
				
			});
		}

	};
	var pricingWayPoint = function() {

		if ( $('#fh5co-pricing').length > 0 ) {
			$('#fh5co-pricing').waypoint( function( direction ) {
										
					setTimeout(function(){
						$('.animate-pricing-1').addClass('animated fadeIn');
					}, 200);
					setTimeout(function(){
						$('.animate-pricing-2').addClass('animated fadeIn');
					}, 300);
					setTimeout(pricingAnimate, 700);
					
					
					$(this.element).addClass('animated');
						
			
			} , { offset: '95%' } );
		}

	};

	// Pricing
	var pressAnimate = function() {

		if ( $('#fh5co-press').length > 0 ) {	
			$('#fh5co-press .to-animate').each(function( k ) {
				
				var el = $(this);
				
				setTimeout ( function () {
					el.addClass('fadeInUp animated');
				},  k * 200, 'easeInOutExpo' );
				
			});
		}

	};
	var pressWayPoint = function() {

		if ( $('#fh5co-press').length > 0 ) {
			$('#fh5co-press').waypoint( function( direction ) {
										
					setTimeout(function(){
						$('.animate-press-1').addClass('animated fadeIn');
					}, 200);
					setTimeout(function(){
						$('.animate-press-2').addClass('animated fadeIn');
					}, 300);
					setTimeout(pressAnimate, 700);
					
					
					$(this.element).addClass('animated');
						
			
			} , { offset: '95%' } );
		}

	};
    
    
   

	
	

	// Document on load.
	$(function(){

		burgerMenu();
		windowScroll();
		teamWayPoint();
		servicesWayPoint();
		featuresWayPoint();
		testimonialsWayPoint();
		pricingWayPoint();
		pressWayPoint();
        
       

	});


}());