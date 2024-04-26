$(document).ready(function(){
    // options
    var speed = 500; // transition speed - fade
    var autoswitch = true; // auto slider options
    var autoswitch_speed = 4000; // auto slider speed
    var autoSwitchTimer;

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
        autoSwitchTimer = setTimeout(autoSlide, autoswitch_speed);
    }

    function autoSlide() {
        nextSlide();
        autoSwitchTimer = setTimeout(autoSlide, autoswitch_speed);
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

    // Pause on tab inactive
    $(window).on('blur', function() {
        clearTimeout(autoSwitchTimer);
    });

    // Resume on tab active
    $(window).on('focus', function() {
        autoSwitchTimer = setTimeout(autoSlide, autoswitch_speed);
    });
});
