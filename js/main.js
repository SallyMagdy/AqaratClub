(function () {

	'use strict';

	/**
	 * Scroll top
	 */
	var scroll_top = $('.scroll-top');
	if(scroll_top.length != 0) {
		scroll_top.on('click', function() {
			$.scrollTo('body', 800);
		});
	}


	$(document).ready( function(){
		$('#compare').click( function() {
			var toggleWidth = $("#mySidenav").width() == 0 ? "235" : "0";
			$('#mySidenav').animate({ width: toggleWidth });
		});


	});

	$(document).on('ready', function() {
		$('.regular').slick({
			arrows: true,
			infinite: false,
			slidesToShow: 3,
			slidesToScroll: 3,
			responsive: [
				{
					breakpoint: 1124,
					settings: {
						slidesToShow: 2,
						slidesToScroll: 2,
						infinite: true,
						dots: true
					}
				},

				{
					breakpoint: 850,
					settings: {
						slidesToShow: 1,
						slidesToScroll: 1,
					}
				}]

		});
	});




	// iPad and iPod detection	
	var isiPad = function () {
		return (navigator.platform.indexOf("iPad") != -1);
	};

	var isiPhone = function () {
		return (
			(navigator.platform.indexOf("iPhone") != -1) ||
			(navigator.platform.indexOf("iPod") != -1)
		);
	};

	// Main Menu Superfish
	var mainMenu = function () {

		$('#co-primary-menu').superfish({
			delay: 0,
			animation: {
				opacity: 'show'
			},
			speed: 'fast',
			cssArrows: true,
			disableHI: true
		});

	};

	// Parallax
	var parallax = function () {
		$(window).stellar();
	};


	// Offcanvas and cloning of the main menu
	var offcanvas = function () {

		var $clone = $('#co-menu-wrap').clone();
		$clone.attr({
			'id': 'offcanvas-menu'
		});
		$clone.find('> ul').attr({
			'class': '',
			'id': ''
		});

		$('#co-page').prepend($clone);

		// click the burger
		$('.js-co-nav-toggle').on('click', function () {

			if ($('body').hasClass('co-offcanvas')) {
				$('body').removeClass('co-offcanvas');
			} else {
				$('body').addClass('co-offcanvas');
			}
			// $('body').toggleClass('co-offcanvas');

		});

		$('#offcanvas-menu').css('height', $(window).height());

		$(window).resize(function () {
			var w = $(window);


			$('#offcanvas-menu').css('height', w.height());

			if (w.width() > 769) {
				if ($('body').hasClass('co-offcanvas')) {
					$('body').removeClass('co-offcanvas');
				}
			}

		});

	}



	// Click outside of the Mobile Menu
	var mobileMenuOutsideClick = function () {
		$(document).click(function (e) {
			var container = $("#offcanvas-menu, .js-co-nav-toggle");
			if (!container.is(e.target) && container.has(e.target).length === 0) {
				if ($('body').hasClass('co-offcanvas')) {
					$('body').removeClass('co-offcanvas');
				}
			}
		});
	};


	/*Carousel*/
	$(document).ready(function() {

		//Sort random function
		function random(owlSelector){
			owlSelector.children().sort(function(){
				return Math.round(Math.random()) - 0.5;
			}).each(function(){
				$(this).appendTo(owlSelector);
			});
		}

		$("#owl-demo").owlCarousel({
			navigation: true,
			navigationText: [
				"<i class='fa fa-chevron-left'></i>",
				"<i class='fa fa-chevron-right'></i>"
			],
			beforeInit : function(elem){
				//Parameter elem pointing to $("#owl-demo")
				random(elem);
			}

		});

	});

	// Animations

	var contentWayPoint = function () {
		var i = 0;
		$('.animate-box').waypoint(function (direction) {

			if (direction === 'down' && !$(this.element).hasClass('animated')) {

				i++;

				$(this.element).addClass('item-animate');
				setTimeout(function () {

					$('body .animate-box.item-animate').each(function (k) {
						var el = $(this);
						setTimeout(function () {
							el.addClass('fadeInUp animated');
							el.removeClass('item-animate');
						}, k * 200, 'easeInOutExpo');
					});

				}, 100);

			}

		}, {
			offset: '85%'
		});
	};


	// Document on load.
	$(function () {
		mainMenu();
		parallax();
		offcanvas();
		mobileMenuOutsideClick();
		contentWayPoint();


	});



}());