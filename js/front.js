$(document).ready(function(){
	// options
	var speed = 500; //transition speed - fade
	var autoswitch = true; //auto slider options
	var autoswitch_speed = 4000; //auto slider speed
	
	// add first initial start class
	$(".slide").first().addClass("start");
	
	// hide all slides
	$(".slide").hide();
	
	// show only start class slide
	$(".start").show();
	
	// Next Event Handler
	$('#next').on('click', nextSlide);// call function nextSlide
	
	// Prev Event Handler
	$('#prev').on('click', prevSlide);// call function prevSlide
	
	// Auto Slider Handler
	if(autoswitch == true){
		setInterval(nextSlide,autoswitch_speed);// call function and value 
    }
    
    
	
	// Switch to next slide
	function nextSlide(){
		$('.start').removeClass('start').addClass('oldStart');
		if($('.oldStart').is(':last-child')){
			$('.slide').first().addClass('start');
		} else {
			$('.oldStart').next().addClass('start');
		}
		$('.oldStart').removeClass('oldStart');
		$('.slide').fadeOut(speed);
		$('.start').fadeIn(speed);
	}
	
	// Switch to prev slide
	function prevSlide(){
		$('.start').removeClass('start').addClass('oldStart');
		if($('.oldStart').is(':first-child')){
			$('.slide').last().addClass('start');
		} else {
			$('.oldStart').prev().addClass('start');
		}
		$('.oldStart').removeClass('oldStart');
		$('.slide').fadeOut(speed);
		$('.start').fadeIn(speed);
	}
});




// Function to add and remove the page transition screen
function pageTransition() {

    var tl = gsap.timeline();
    tl.set('.loading-screen', { transformOrigin: "bottom left"});
    tl.to('.loading-screen', { duration: .5, scaleY: 1});
    tl.to('.loading-screen', { duration: .5, scaleY: 0, skewX: 0, transformOrigin: "top left", ease: "power1.out", delay: 1 });
  }
  
  // Function to animate the content of each page
  function contentAnimation() {
  
    var tl = gsap.timeline();
    $('.black-heading-bg').addClass('show');
  
  }