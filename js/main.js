$(document).ready(function() {
    // Pricing Boxes
    var pricing = $(".pricing");

    pricing.on("mouseover", function(){
        pricing.removeClass("pricing--active");
        $(this).addClass("pricing--active");
    });
    
    // Smooth Scroll
    $("nav a, .to-contact").click(function(event) {
        event.preventDefault();

        if(this.hash !== "")  {
            $('html, body').stop(true).animate({
                scrollTop: $(this.hash).offset().top
            },400);   
        } 
    });
    
    // Hide Elements In Portfolio

    $(".portfolio").each(function(){

        var itemsInPortfolio = $(this).children().length;
        var itemsToShow = 3;

        $(this).children().each(function(index, element){
            if (index >= itemsToShow && index < itemsInPortfolio - 1) {
                $(element).addClass("hide");
            }
        });
    })

    // Show More

    $(".portfolio__more a").on("click", function(e) {
       e.preventDefault();
       $(this).closest(".portfolio").children().each(function() {
           $(this).removeClass("hide");
        });
        $(this).parent().remove();
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
