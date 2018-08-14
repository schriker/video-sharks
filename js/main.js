$(function() {
    // Pricing Boxes
    var pricing = $(".pricing");

    pricing.on("mouseover", function(){
        pricing.removeClass("pricing--active");
        $(this).addClass("pricing--active");
    });
    // Carousel Setup
    $(".customers").owlCarousel({
        items: 1,
        loop: false,
        autoplay: false,
        dotsContainer: '.customers__dots'
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
