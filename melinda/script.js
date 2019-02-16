$(document).ready(function(){
    // variables
    var $header_top = $('.header-top');
    var $nav = $('nav');

    // toggle menu 
    $header_top.find('a').on('click', function() {
        $(this).parent().toggleClass('open-menu');
    });
  
    // fullpage initialization
    $('#fullpage').fullpage({
        sectionsColor: ['#99cccc', '#cfbee4', '#e1c699', '#b4cfff', '#f5f5f5'],
        sectionSelector: '.vertical-scrolling',
        slideSelector: '.horizontal-scrolling',
        navigation: true,
        navigationPosition: 'left',
        slidesNavigation: false,
        css3: true,
        controlArrows: true,
        loopHorizontal: false,
        anchors: ['home', 'ex1', 'ex2', 'ex3'],
        menu: '#menu',

        afterLoad: function(anchorLink, index) {
            $header_top.css('background', 'rgba(0, 0, 50, .3)');
        },
  
        onLeave: function(index, nextIndex, direction) {
            var idx = Math.abs(index - nextIndex)*1.1;
            $.fn.fullpage.setScrollingSpeed(idx*700);
        },
  
        afterSlideLoad: function(anchorLink, index, slideAnchor, slideIndex) {
            $('#fp-nav').hide();
            if (anchorLink != 'firstSection' && slideIndex == 1) {
                $.fn.fullpage.setAllowScrolling(false);
            } else if (slideIndex == 0) {
                $('#fp-nav').show();
                $.fn.fullpage.setAllowScrolling(true);
            }
        },
    
        onSlideLeave: function(anchorLink, index, slideIndex, direction) {
            $('#fp-nav').hide();
            if (anchorLink != 'firstSection' && slideIndex == 1) {
                $('#fp-nav').show();
                $.fn.fullpage.setAllowScrolling(true);
            }
        } 
    });

    $('.fp-prev').append('<i class="fa fa-angle-left arrow-black"></i> <p class="nav-label-black">Back</p>');
    $('.fp-next').append('<i class="fa fa-angle-right arrow pulsate"></i> <p class="nav-label pulsate">View Exhibit</p>');
});