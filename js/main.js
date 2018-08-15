$(document).ready(function() {
    // Pricing Boxes
    var pricing = $(".pricing");

    pricing.on("mouseover", function(){
        pricing.removeClass("pricing--active");
        $(this).addClass("pricing--active");
    });
});

$(window).on('load', function() {
    // Carousel setup

    function aosInit() {
        AOS.init();
}

    $(".customers").owlCarousel({
        items: 1,
        loop: true,
        autoplay: false,
        dotsContainer: '.customers__dots',
        onInitialized: aosInit
    });

    $(".owl-item").addClass("col");

    var owl = $('.owl-carousel');
    owl.owlCarousel();

    $(".next").click(function(){
        owl.trigger('next.owl.carousel');
    });
    
    $(".prev").click(function(){
        owl.trigger('prev.owl.carousel');
    });
});
