$(function() {
    "use strict";
    var wind = $(window);
    $(".client .owl-carousel").owlCarousel({
        items: 1,
        loop: true,
        autoplay: true,
        smartSpeed: 500
    });
    wind.on("scroll", function() {
        var bodyScroll = wind.scrollTop(),
            navbar = $("nav");
        if (bodyScroll > 600) {
            navbar.addClass("unique-color-dark")
        } else {
            navbar.removeClass("unique-color-dark")
        }
    });
    $.scrollIt({
        upKey: 38,
        downKey: 40,
        easing: "linear",
        scrollTime: 1e3,
        activeClass: "active-1",
        onPageChange: null
    });
    $(".button-scroll").on("click", function() {
        var scrollTo = $(this).attr("data-scrollTo");
        $("body, html").animate({
            scrollTop: $("#" + scrollTo).offset().top - 60
        }, 1e3)
    });
    $(".caption h4 span").typed({
        strings: [" CREATOR  ", "  DESIGNER ", "  DEVELOPER  " , "  CODER  "],
        loop: true,
        startDelay: 1e3,
        backDelay: 1500
    });
    wind.on("scroll", function() {
        var bodyScroll = wind.scrollTop();
        if (bodyScroll > 970) {
            $("#bar2").barfiller({
                barColor: "#03a9f4",
                duration: 2e3
            });
            $("#bar3").barfiller({
                barColor: "#03a9f4",
                duration: 1600
            });
            $("#bar4").barfiller({
                barColor: "#03a9f4",
                duration: 1200
            });
            $("#bar5").barfiller({
                barColor: "#03a9f4"
            });
            $("#bar6").barfiller({
                barColor: "#03a9f4",
                duration: 1800
            })
        }
    });
    $(".portfolio .link").magnificPopup({
        delegate: "a",
        type: "image"
    });
    wind.stellar();
    $(".gallery").isotope({
        itemSelector: ".item-img"
    });
    var $gallery = $(".gallery").isotope({});
    $(".filtering").on("click", "span", function() {
        var filterValue = $(this).attr("data-filter");
        $gallery.isotope({
            filter: filterValue
        })
    });
    $(".filtering").on("click", "span", function() {
        $(this).addClass("active-1").siblings().removeClass("active-1")
    })
});
$(window).on("load", function() {
    $(".loading").fadeOut(500)
});