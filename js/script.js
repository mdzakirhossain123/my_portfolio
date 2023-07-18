$(function () {

    //===========MENU FIX===========
	var navoff = $('.main_menu').offset().top

	$(window).on('scroll', function () {
		var scrolling = $(this).scrollTop();

		if (scrolling > navoff) {
			$('.main_menu').addClass('menu-fix')
		} else {
			$('.main_menu').removeClass('menu-fix')
		}
	});
    //==========SIDE MENU==========  
    $('.menu_icon').on('click', function () {
        $('.side_menu').addClass('.menu_show');
    });

    $('.close_icon').on('click', function () {
        $('.side_menu').removeClass('.menu_show');
    });



    //=====TYPE/HEADLINE=====//
    $('.animate-clip').animatedHeadline({
        animationType: 'clip'
    });

    //=====BARFILLER JS=====//
    $('#bar1').barfiller({
        barColor: 'linear-gradient(98deg, rgba(221,36,118,1) 0%, rgba(242,30,78,1) 100%)',
        duration: 1800
    });
    $('#bar2').barfiller({
        barColor: 'linear-gradient(98deg, rgba(221,36,118,1) 0%, rgba(242,30,78,1) 100%)',
        duration: 1800
    });
    $('#bar3').barfiller({
        barColor: 'linear-gradient(98deg, rgba(221,36,118,1) 0%, rgba(242,30,78,1) 100%)',
        duration: 1800
    });
    $('#bar4').barfiller({
        barColor: 'linear-gradient(98deg, rgba(221,36,118,1) 0%, rgba(242,30,78,1) 100%)',
        duration: 1800
    });
    $('#bar5').barfiller({
        barColor: 'linear-gradient(98deg, rgba(221,36,118,1) 0%, rgba(242,30,78,1) 100%)',
        duration: 1800
    });
    $('#bar6').barfiller({
        barColor: 'linear-gradient(98deg, rgba(221,36,118,1) 0%, rgba(242,30,78,1) 100%)',
        duration: 1800
    });
    $('#bar7').barfiller({
        barColor: 'linear-gradient(98deg, rgba(221,36,118,1) 0%, rgba(242,30,78,1) 100%)',
        duration: 1800
    });
    $('#bar8').barfiller({
        barColor: 'linear-gradient(98deg, rgba(221,36,118,1) 0%, rgba(242,30,78,1) 100%)',
        duration: 1800
    });
    $('#bar9').barfiller({
        barColor: 'linear-gradient(98deg, rgba(221,36,118,1) 0%, rgba(242,30,78,1) 100%)',
        duration: 1800
    });
    $('#bar10').barfiller({
        barColor: 'linear-gradient(98deg, rgba(221,36,118,1) 0%, rgba(242,30,78,1) 100%)',
        duration: 1800
    });
    $('#bar11').barfiller({
        barColor: 'linear-gradient(98deg, rgba(221,36,118,1) 0%, rgba(242,30,78,1) 100%)',
        duration: 1800
    });
    $('#bar12').barfiller({
        barColor: 'linear-gradient(98deg, rgba(221,36,118,1) 0%, rgba(242,30,78,1) 100%)',
        duration: 1800
    });

    //=====TEAM SLODER JS=====//
    $('.team_slider').slick({
        slidesToShow: 4,
        slidesToScroll: 1,
        autoplay: false,
        autoplaySpeed: 2000,
        nextArrow: '<i class="fas fa-chevron-right nxt_arr"></i>',
        prevArrow: '<i class="fas fa-chevron-left prv_arr"></i>',

        responsive: [{
                breakpoint: 991,
                settings: {
                    slidesToShow: 3,
                    slidesToScroll: 1,
                    infinite: true,
                    dots: false,
                }
            },
            {
                breakpoint: 767,
                settings: {
                    slidesToShow: 2,
                    slidesToScroll: 1,
                    dots:false,
                }
            },
            {
                breakpoint: 575,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1
                }
            }
        ]
    });

    //=====COUNTER UP JS=====//
    $('.counter').counterUp({
        delay: 10,
        time: 1000
    });

    //=====WINDOW SOCIAL BUTTON=====//   
    $('.window_button_menu').on('click', function () {
        $('.icon_list').toggleClass('.menu_slide');
    });

    $('.menu_btn').on('click', function () {
        $('#arrow_icon').toggleClass('.btn_roatet');
    });

    //=====CLIENT_REVIEW_SLIDER=====//
    $('.test_slider').slick({
        slidesToShow: 3,
        slidesToScroll: 1,
        autoplay: false,
        autoplaySpeed: 2000,
        dots: true,
        arrows: false,

        responsive: [{
                breakpoint: 991,
                settings: {
                    slidesToShow: 3,
                    slidesToScroll: 1,
                    dots: true,
                }
            },
            {
                breakpoint: 767,
                settings: {
                    slidesToShow: 2,
                    slidesToScroll: 1,
                }
            },
            {
                breakpoint: 575,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1,
                    // autoplay: true,
                }
            }
        ]
    });

    //=========JQUERY_IMAGE_SCROLL==========//
    $(window).on('load', function () {
        $('.screen').scrollImage();
    })

    //=========FILTER_MIX_JS==========//
    var containerEl = document.querySelector('.all_filter_item');
    var mixer = mixitup(containerEl);


    //=========WOW_JS==========//
	new WOW().init();

    //=========SCROLL_BTTN_JS==========//
    var btn = $('.scroll-to-top');

	$(window).scroll(function () {
	  if ($(window).scrollTop() > 100) {
		btn.addClass('show');
	  } else {
		btn.removeClass('show');
	  }
	});
  
	btn.on('click', function (e) {
	  e.preventDefault();
	  $('html, body').animate({
		scrollTop: 0
	  }, '100');
	});


    // form_validation

    function validate(){
        var name = document.getElementById("name").value;
        var subject = document.getElementById("subject").value;
        var phone = document.getElementById("phone").value;
        var email = document.getElementById("email").value;
        var message = document.getElementById("message").value;
        var error_message = document.getElementById("error_message");
        
        error_message.style.padding = "10px";
        
        var text;
        if(name.length < 5){
          text = "Please Enter valid Name";
          error_message.innerHTML = text;
          return false;
        }
        if(subject.length < 10){
          text = "Please Enter Correct Subject";
          error_message.innerHTML = text;
          return false;
        }
        if(isNaN(phone) || phone.length != 10){
          text = "Please Enter valid Phone Number";
          error_message.innerHTML = text;
          return false;
        }
        if(email.indexOf("@") == -1 || email.length < 6){
          text = "Please Enter valid Email";
          error_message.innerHTML = text;
          return false;
        }
        if(message.length <= 140){
          text = "Please Enter More Than 140 Characters";
          error_message.innerHTML = text;
          return false;
        }
        alert("Form Submitted Successfully!");
        return true;
      }



});