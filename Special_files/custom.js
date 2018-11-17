
var loadSpace = document.getElementById('loader');
var mainLoop = document.createElement('div');
var shadeDot = document.createElement('div');
var arcaPipe = document.createElement('div');
var loadBars = document.createElement('div');
var loadNumb = document.createElement('div');

mainLoop.className = "dotring";
shadeDot.className = "spheric";
arcaPipe.className = "pipline";
loadBars.className = "loadbar";
loadNumb.className = "numbers";

function setPack(num){
  loadBars.innerHTML = '';
  for (i=0;i<num;i++){
    var loadPack = document.createElement('div');
    loadPack.className = "loadpac";
    loadPack.style.zIndex = 100 - i;
    loadPack.style.backgroundPosition = "0 "+(i*30)+"px";
    loadBars.appendChild(loadPack);
  }
}

mainLoop.appendChild(shadeDot);
mainLoop.appendChild(arcaPipe);
loadSpace.appendChild(mainLoop);
loadSpace.appendChild(loadBars);

var prog = 0;
function loadry(){
  prog ++;
  if(prog <= 100){
    boxn = Math.floor(prog/5.5);
    setPack(boxn);
    loadNumb.innerHTML = prog;
    loadSpace.appendChild(loadNumb);
  } else if (prog == 120){
    loadSpace.style.opacity = 0;
  } else if (prog >= 130){
    loadSpace.style.opacity = 1;
    prog = 0;
  };
  setTimeout(loadry,(Math.random()*120)+40);
}
loadry();

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
        strings: [" CREATOR  ", "  ENGINEER ", "  DEVELOPER  " ,"FROM OPEN-SOURCE COMMUNITY" , "  PROGRAMMER  " , " AMBIVERT " , "  BLOGGER  " , " PASSIONATE " , "  GEEK  ", "  TECH FREAK  "],
        loop: true,
        startDelay: 1e3,
        backDelay: 1500,
        typeSpeed: 70,
        backSpeed:50
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

(function() {

  'use strict';

  // define variables
  var items = document.querySelectorAll(".timeline li");

  // check if an element is in viewport
  // http://stackoverflow.com/questions/123999/how-to-tell-if-a-dom-element-is-visible-in-the-current-viewport
  function isElementInViewport(el) {
    var rect = el.getBoundingClientRect();
    return (
      rect.top >= 0 &&
      rect.left >= 0 &&
      rect.bottom <= (window.innerHeight || document.documentElement.clientHeight) &&
      rect.right <= (window.innerWidth || document.documentElement.clientWidth)
    );
  }

  function callbackFunc() {
    for (var i = 0; i < items.length; i++) {
      if (isElementInViewport(items[i])) {
        items[i].classList.add("in-view");
      }
    }
  }

  // listen for events
  window.addEventListener("load", callbackFunc);
  window.addEventListener("resize", callbackFunc);
  window.addEventListener("scroll", callbackFunc);

})();

