// text shuffle
var ui_scroll_text = new ShuffleText(document.querySelector('#ui_scroll_text'));
var $ui_scroll = $("#ui_scroll");

$ui_scroll.on({
    mouseenter: function () {
        ui_scroll_text.start();
    },
    mouseleave: function () {
        ui_scroll_text.start();
    }
}); 

//set scroll-length/height
$(document).ready(function() {
    //get doc height
    var contentHeight = $("#content-height").outerHeight()-(window.innerHeight/4)*3;

    
    //set el height
    document.getElementById("ui_scroll").style.width = contentHeight + "px";
});