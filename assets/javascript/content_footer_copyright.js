// get animation object
var footer_copyright = new ShuffleText(document.querySelector('#content_footer_copyright_type'));
//get hover object
var $my_footerButton = $("#content_footer_copyright");

$my_footerButton.on({
    mouseenter: function () {
        footer_copyright.setText("look but don't touch");
        footer_copyright.start();
    },
    mouseleave: function () {
        footer_copyright.setText("©2023 Holger Ardelt");
        footer_copyright.start();
    }
}); 
