// function hideElements(container, button, itemsToShow) {
//     $(container).each(function(){

//         var itemsInPortfolio = $(this).children().length;

//         $(this).children().each(function(index, element){
//             if (index >= itemsToShow && index < itemsInPortfolio - 1) {
//                 $(element).addClass("hide");
//             }
//         });
//     })

//     // Show More

//     $(button).on("click", function(e) {
//        e.preventDefault();
//        $(this).closest(container).children().each(function() {
//            $(this).removeClass("hide");
//         });
//         $(this).parent().remove();
//     });
// }

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
    // hideElements(".portfolio", ".portfolio__more a", 3);
    // hideElements(".mobile-portfolio", ".portfolio__more--mobile a", 1);
});

$(window).on('load', function() {
    // Carousel setup
    function aosInit() {
        AOS.init();
    }
    // Script For Mobile Only Carousels

    var mobileCarousels = [
        $('.choose-carousel'),
        $('.pricing-carousel')
    ],
    owlOptions = {
        loop: false,
        margin: 10,
        responsive: {
            0: {
                items: 1
            }
        }
    };

    $('.portfolio-carousel').owlCarousel(owlOptions);

    if ( $(window).width() < 768 ) {
        for(i=0; i < mobileCarousels.length; i++) {
            var owlActive = mobileCarousels[i];
            owlActive.owlCarousel(owlOptions);
        }
    } else {
        for(i=0; i < mobileCarousels.length; i++) {
            var owlActive = mobileCarousels[i];
            owlActive.addClass('off');
        }
    }

    $(window).resize(function() {
        if ( $(window).width() < 768 ) {
            if ( $('.owl-carousel').hasClass('off') ) {
                for(i=0; i < mobileCarousels.length; i++) {
                    var owlActive = mobileCarousels[i];
                    owlActive.owlCarousel(owlOptions);
                    owlActive.removeClass('off');
                }
            }
        } else {
            if ( !$('.owl-carousel').hasClass('off') ) {
                for(i=0; i < mobileCarousels.length; i++) {
                    var owlActive = mobileCarousels[i];
                    owlActive.addClass('off').trigger('destroy.owl.carousel');
                    owlActive.find('.owl-stage-outer').children(':eq(0)').unwrap();
                }
            }
        }
    });
    $(".customers").owlCarousel({
        items: 1,
        loop: true,
        autoplay: false,
        dotsContainer: '.customers__dots',
        onInitialized: aosInit
    });

    $(".owl-item").addClass("col");

    var cusomersOwl = $('.customers');
    cusomersOwl.owlCarousel();

    $(".next").click(function(){
        cusomersOwl.trigger('next.owl.carousel');
    });
    
    $(".prev").click(function(){
        cusomersOwl.trigger('prev.owl.carousel');
    });
});
