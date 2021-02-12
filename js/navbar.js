
// ----------選單------------

	
// Collapse Navbar
(function () {
    $(function () {
        var $menu, $menubtn, $overlayer;
        $menubtn = $('#hb');
		$menu = $('.navigation');
		$overlayer = $('.overlayer');
        $menubtn.on('click', function () {
            if ($menubtn.hasClass('active')) {
                $menubtn.removeClass('active');
				$menu.removeClass('slide-right');
				$overlayer.removeClass('slide-right');
								
            } else {
                $menubtn.addClass('active');
                $menu.addClass('slide-right');
				$overlayer.addClass('slide-right');
            }
        });
    });
}.call(this));




(function () {
	var $addItem = $("#add-item");
	var $badge = $(".badge");
	var $count = 1;
	
	$addItem.on("click", function(e) {
		e.preventDefault();
		$badge.html($count++);
	});
}.call(this));

(function($) {
    "use strict";

	
// Smooth scrolling using jQuery easing
$('a.js-scroll-trigger[href*="#"]:not([href="#"])').click(function() {
if (location.pathname.replace(/^\//, '') == this.pathname.replace(/^\//, '') && location.hostname == this.hostname) {
	var target = $(this.hash);
	target = target.length ? target : $('[name=' + this.hash.slice(1) + ']');
	if (target.length) {
	$('html, body').animate({
		scrollTop: (target.offset().top - 54)
	}, 1000, "easeInOutExpo");
	return false;
	}
}
});
	
	


    // Scroll to top  		
	if ($('#scroll-to-top').length) {
		var scrollTrigger = 100, // px
			backToTop = function () {
				var scrollTop = $(window).scrollTop();
				if (scrollTop > scrollTrigger) {
					$('#scroll-to-top').addClass('show');
				} else {
					$('#scroll-to-top').removeClass('show');
				}
			};
		backToTop();
		$(window).on('scroll', function () {
			backToTop();
		});
		$('#scroll-to-top').on('click', function (e) {
			e.preventDefault();
			$('html,body').animate({
				scrollTop: 0
			}, 700);
		});
    }
})(jQuery);
