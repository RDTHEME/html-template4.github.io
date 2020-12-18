"use strict";
function GetHeightCss() {
    var h = window.innerHeight || document.documentElement.clientHeight || document.body.clientHeight;
    var w = window.innerWidth || document.documentElement.clientWidth || document.body.clientWidth;
    var css = "";
    var $window = $(window);
    var windowsize = $window.width();
    if (windowsize > 767) {
        var pad = 0;
    } else {
        var pad = 0;
    }
    var availableheight = h - pad;
    css = '.height-one{ height: ' + availableheight + 'px;}';
    var cssEle = document.getElementById('heightStyle');
    if (cssEle == null) {
        var head = document.head || document.getElementsByTagName('head')[0],
        style = document.createElement('style');
        style.type = 'text/css';
        style.setAttribute("id", "heightStyle");
        if (style.styleSheet) {
            style.styleSheet.cssText = css;
        } else {
            style.appendChild(document.createTextNode(css));
        }
        head.appendChild(style);
    } else {
        cssEle.innerHTML = css;
    }
}
GetHeightCss();
$(window).on("resize", function() {
    GetHeightCss();
    equalheight('.equal-height > div');
});

var equalheight = function(container) {
    var currentTallest = 0,
    currentRowStart = 0,
    rowDivs = new Array(),
    $el,
    topPosition = 0;
    $(container).each(function() {
        $el = $(this);
        $($el).height('auto')
        topPosition = $el.position().top;
        if (currentRowStart != topPosition) {
            for (var currentDiv = 0; currentDiv < rowDivs.length; currentDiv++) {
                rowDivs[currentDiv].height(currentTallest);
            }
            rowDivs.length = 0; // empty the array
            currentRowStart = topPosition;
            currentTallest = $el.height();
            rowDivs.push($el);
        } else {
            rowDivs.push($el);
            currentTallest = (currentTallest < $el.height()) ? ($el.height()) : (currentTallest);
        }
        for (var currentDiv = 0; currentDiv < rowDivs.length; currentDiv++) {
            rowDivs[currentDiv].height(currentTallest);
        }
    });
}
//Preloader
$(window).on("load", function() {
    equalheight('.equal-height > div');
    $('#loading').hide();
});
