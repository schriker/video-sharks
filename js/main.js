$(function(){
    var pricing = $(".pricing");
    pricing.on("mouseover", function(){
        pricing.removeClass("pricing--active");
        $(this).addClass("pricing--active");
    })
});
