(function() {
	'use strict';

	/*----------------------------------------
		Detect Mobile
	----------------------------------------*/
	var isMobile = {
		Android: function() {
			return navigator.userAgent.match(/Android/i);
		},
			BlackBerry: function() {
			return navigator.userAgent.match(/BlackBerry/i);
		},
			iOS: function() {
			return navigator.userAgent.match(/iPhone|iPad|iPod/i);
		},
			Opera: function() {
			return navigator.userAgent.match(/Opera Mini/i);
		},
			Windows: function() {
			return navigator.userAgent.match(/IEMobile/i);
		},
			any: function() {
			return (isMobile.Android() || isMobile.BlackBerry() || isMobile.iOS() || isMobile.Opera() || isMobile.Windows());
		}
	};

	/*----------------------------------------
		Back to top
	----------------------------------------*/
	/*
	var backToTop = function() {
		jQuery('.js-backtotop').on('click', function(e){
			e.preventDefault();
			jQuery('html, body').animate({
	        scrollTop: jQuery('body').offset().top
	    }, 700, 'easeInOutExpo');

		});
	}*/

	/*----------------------------------------
		More
	----------------------------------------*/
	/*
	var moreControl = function() {
		jQuery('.js-btn-more').on('click', function(e){
			e.preventDefault();
			jQuery('.probootstrap-header-top').toggleClass('active');
		});
	};*/

	/*----------------------------------------
		Search
	----------------------------------------*/
	/*
	var searchControl = function() {
		jQuery('.js-probootstrap-search').on('click', function(){
			jQuery('#probootstrap-search').addClass('active');
			setTimeout(function(){
				jQuery('#probootstrap-search').find('#search').focus().select();
			}, 500);
		});
		jQuery('.js-probootstrap-close').on('click', function(){
			jQuery('#probootstrap-search').removeClass('active');
		});
	};*/

	/*----------------------------------------
		Menu Hover
	----------------------------------------*/
	/*
	var menuHover = function() {
		if (!isMobile.any()) {
			jQuery('.probootstrap-navbar .navbar-nav li.dropdown').hover(function() {
			  jQuery(this).find('> .dropdown-menu').stop(true, true).delay(200).fadeIn(500).addClass('animated-fast fadeInUp');
			}, function() {
				jQuery(this).find('> .dropdown-menu').stop(true, true).fadeOut(200).removeClass('animated-fast fadeInUp')
			});
		}
	}
	*/
	/*----------------------------------------
		Carousel
	----------------------------------------*/
	/*
	var owlCarousel = function(){

		var owl = jQuery('.owl-carousel-carousel');
		owl.owlCarousel({
			items: 3,
			loop: true,
			margin: 20,
			nav: false,
			dots: true,
			smartSpeed: 800,
			autoHeight: true,
			navText: [
		      "<i class='icon-keyboard_arrow_left owl-direction'></i>",
		      "<i class='icon-keyboard_arrow_right owl-direction'></i>"
	     	],
	     	responsive:{
	        0:{
	            items:1
	        },
	        400:{
	            items:1
	        },
	        600:{
	            items:2
	        },
	        1000:{
	            items:3
	        }
	    	}
		});

		var owl = jQuery('.owl-carousel-fullwidth');
		owl.owlCarousel({
			items: 1,
			loop: true,
			margin: 20,
			nav: false,
			dots: true,
			smartSpeed: 800,
			autoHeight: true,
			autoplay: true,
			navText: [
		      "<i class='icon-keyboard_arrow_left owl-direction'></i>",
		      "<i class='icon-keyboard_arrow_right owl-direction'></i>"
	     	]
		});

		var owl = jQuery('.owl-work');
		owl.owlCarousel({
			stagePadding: 150,
			loop: true,
			margin: 20,
			nav: true,
			dots: false,
			mouseDrag: false,
			autoWidth: true,
			autoHeight: true,
	    autoplay: true,
	    autoplayTimeout:2000,
	    autoplayHoverPause:true,
			navText: [	
				"<i class='icon-chevron-thin-left'></i>",
				"<i class='icon-chevron-thin-right'></i>"
			],
			responsive:{
			  0:{
		      items:1,
		      stagePadding: 10
			  },
			  500:{
			  	items:2,
		      stagePadding: 20
			  },
			  600:{
		      items:2,
		      stagePadding: 40
			  },
			  800: {
			  	items:2,
			  	stagePadding: 100
			  },
			  1100:{
		      items:3
			  },
			  1400:{
		      items:4
			  },
			}
		});
	};
	*/
	
	/*----------------------------------------
		Slider
	----------------------------------------*/
	/*
	var flexSlider = function() {
	  jQuery('.flexslider').flexslider({
	    animation: "fade",
	    prevText: "",
	    nextText: "",
	    slideshow: true
	  });
	}*/

	
	/*----------------------------------------
		Content Animation
	----------------------------------------*/
	var contentWayPoint = function() {
		var i = 0;
		jQuery('.probootstrap-animate').waypoint( function( direction ) {

			if( direction === 'down' && !jQuery(this.element).hasClass('probootstrap-animated') ) {
				
				i++;

				jQuery(this.element).addClass('item-animate');
				setTimeout(function(){

					jQuery('body .probootstrap-animate.item-animate').each(function(k){
						var el = jQuery(this);
						setTimeout( function () {
							var effect = el.data('animate-effect');
							if ( effect === 'fadeIn') {
								el.addClass('fadeIn probootstrap-animated');
							} else if ( effect === 'fadeInLeft') {
								el.addClass('fadeInLeft probootstrap-animated');
							} else if ( effect === 'fadeInRight') {
								el.addClass('fadeInRight probootstrap-animated');
							} else {
								el.addClass('fadeInUp probootstrap-animated');
							}
							el.removeClass('item-animate');
						},  k * 200, 'easeInOutExpo' );
					});
					
				}, 100);
				
			}

		} , { offset: '65%' } );
	};

	

	/*----------------------------------------
		Counter Animation
	----------------------------------------*/
	/*
	var counter = function() {
		jQuery('.js-counter').countTo({
			 formatter: function (value, options) {
	      return value.toFixed(options.decimals);
	    },
		});
	};
	var counterWayPoint = function() {
		if (jQuery('#probootstrap-counter').length > 0 ) {
			jQuery('#probootstrap-counter').waypoint( function( direction ) {
										
				if( direction === 'down' && !jQuery(this.element).hasClass('probootstrap-animated') ) {
					setTimeout( counter , 400);					
					jQuery(this.element).addClass('probootstrap-animated');
				}
			} , { offset: '90%' } );
		}
	};

	var magnificPopupControl = function() {


		jQuery('.image-popup').magnificPopup({
			type: 'image',
			removalDelay: 300,
			mainClass: 'mfp-with-zoom',
			gallery:{
				enabled:true
			},
			zoom: {
				enabled: true, // By default it's false, so don't forget to enable it

				duration: 300, // duration of the effect, in milliseconds
				easing: 'ease-in-out', // CSS transition easing function

				// The "opener" function should return the element from which popup will be zoomed in
				// and to which popup will be scaled down
				// By defailt it looks for an image tag:
				opener: function(openerElement) {
				// openerElement is the element on which popup was initialized, in this case its <a> tag
				// you don't need to add "opener" option if this code matches your needs, it's defailt one.
				return openerElement.is('img') ? openerElement : openerElement.find('img');
				}
			}
		});

		jQuery('.with-caption').magnificPopup({
			type: 'image',
			closeOnContentClick: true,
			closeBtnInside: false,
			mainClass: 'mfp-with-zoom mfp-img-mobile',
			image: {
				verticalFit: true,
				titleSrc: function(item) {
					return item.el.attr('title') + ' &middot; <a class="image-source-link" href="'+item.el.attr('data-source')+'" target="_blank">image source</a>';
				}
			},
			zoom: {
				enabled: true
			}
		});


		jQuery('.popup-youtube, .popup-vimeo, .popup-gmaps').magnificPopup({
      disableOn: 700,
      type: 'iframe',
      mainClass: 'mfp-fade',
      removalDelay: 160,
      preloader: false,

      fixedContentPos: false
    });
	}*/

	/*----------------------------------------
		Stellar
	----------------------------------------*/
	/*
	var stellarInit = function() {
		if( !isMobile.any() ) {
			jQuery(window).stellar();
		}
	};*/

	/*
	var progressBarControl = function() {
		if ( jQuery(".progress-bar-s2").length > 0 ) {
      var $progress_bar = jQuery('.progress-bar-s2');

      $progress_bar.appear();
      jQuery(document.body).on('appear', '.progress-bar-s2', function() {
          var current_item = jQuery(this);
          if (!current_item.hasClass('appeared')) {
              var percent = current_item.data('percent');
              current_item.append('<span>' + percent + '%' + '</span>').css('width', percent + '%').addClass('appeared');
          }
          
      });
    };
	}
	*/

	/*----------------------------------------
		Document Ready 
	----------------------------------------*/
	jQuery(document).ready(function(){
		//menuHover();
		//counterWayPoint();
		contentWayPoint();
		//backToTop();
		//searchControl();
		//moreControl();
		//magnificPopupControl();
		//stellarInit();
		//progressBarControl();
	});

	jQuery(window).load(function(){
		//owlCarousel();
		//flexSlider();
	});

	

})();

$(function(){
  var $teamImage; //team image
  var $oriText   // p element
  var $oriTextContent; //p content
  var $oriTextcss; // team image css
  var $clickState = false; //clickstate
  $('.team-image').unbind('click');
  $('.team-image').click(function(){
	
	if($clickState == false){
		$teamImage = $(this); 
		var $parent = $teamImage.parent();
		$oriText = ($parent).children("p");
		$oriTextContent = ($oriText).text();
		$oriTextcss = ($teamImage).css("box-shadow");
		//console.log($oriTextcss);
		($teamImage).css("box-shadow","0px 0px 0px gray");
		$oriText.html("don't press!!  hurt!!");
	}
	
	$clickState = true; 
  });
  
  $('.team-image').hover(
		null,
		function() {
			//console.log($clickState);
			if($clickState)
			{
				($teamImage).css("box-shadow",$oriTextcss);
				$oriText.html($oriTextContent);
				$clickState = false;
			}
		}
	);
  
});

$(function(){
	var $button = $('i.text-land-buttion');
	var $oriCss = $button.css("color");
	//console.log($oriCss);
	$('.page-scroll').hover(
		function() {
			$(this).find("h4,i").css("color","#000000");
		},
		function() {
			$(this).find("h4,i").css("color",$oriCss);
		}
	);
});

$(function(){
	var wrampcount=$('.wrapmcount').size();
	console.log("wrampcount=",wrampcount);
	var heightEach= {};
	for(i=0;i<wrampcount;i++){
		 console.log("i=",i);
		 var slideHeight = 152; // px
		 strWramp = '#wrapm'+i;
		 strReadMore = '.read-more'+i;
		 console.log("strWramp=",strWramp);
		 $(strWramp).css('overflow' , 'hidden');
		 $(strReadMore).css('text-align' , 'center');
		 var defHeight = $(strWramp).height();
		 heightEach[strWramp] = defHeight;
		 console.log("heightEach=",heightEach);
		 console.log("defHeight=",defHeight);
		 if(defHeight >= slideHeight){
		  $(strWramp).css('height' , slideHeight + 'px');
		  $(strReadMore).append('<a href="#">read more &dArr;</a>');
		  console.log(strReadMore+' '+'a');
		  console.log('this = ',$(this));
		  $(strReadMore+' '+'a').click(function(){
		   readMoreNowValid = $(this).parent().attr("class");
		   wrampNowValid = $(this).parent().prev().attr("id");
		   var curHeight = $('#'+wrampNowValid).height();
		   //console.log("wrampNowValid", wrampNowValid);
		   //console.log("defHeight", heightEach['#'+wrampNowValid]);
		   if(curHeight == slideHeight){
			$('#'+wrampNowValid).animate({
			 height: heightEach['#'+wrampNowValid]
			}, "normal");
			$('.'+readMoreNowValid+' '+'a').html('hide &uArr;');
		   }else{
			console.log("wrampNowValid hide", wrampNowValid);
			$('#'+wrampNowValid).animate({
			 height: slideHeight
			}, "normal");
			$('.'+readMoreNowValid+' '+'a').html('read more &dArr;');
		   }
		   return false;
		  });  
		 }
	}
});

//loading page
$(function(){
	var opts = {            
		lines: 13, // 花瓣数目
		length: 20, // 花瓣长度
		width: 10, // 花瓣宽度
		radius: 30, // 花瓣距中心半径
		corners: 1, // 花瓣圆滑度 (0-1)
		rotate: 0, // 花瓣旋转角度
		direction: 1, // 花瓣旋转方向 1: 顺时针, -1: 逆时针
		color: '#5882FA', // 花瓣颜色
		speed: 1, // 花瓣旋转速度
		trail: 60, // 花瓣旋转时的拖影(百分比)
		shadow: false, // 花瓣是否显示阴影
		hwaccel: false, //spinner 是否启用硬件加速及高速旋转            
		className: 'spinner', // spinner css 样式名称
		zIndex: 2e9, // spinner的z轴 (默认是2000000000)
		top: '50%', // spinner 相对父容器Top定位 单位 px
		left: '50%'// spinner 相对父容器Left定位 单位 px
	};

	var target = document.getElementById("myspin");  
	var spinner = new Spinner(opts).spin(target)  
	$(window).load(function(){
		$('header.masthead').css({visibility: "visible"}).animate(3000);;
		//$('header.masthead').addClass("animated");
		//$('header.masthead').addClass("zoomIn");
		$('#AcoSoar').addClass("animated");
		$('#AcoSoar').addClass("zoomIn");
		spinner.stop();
		
	});
});