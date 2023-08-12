// get animation object
var ui_home_text = new ShuffleText(document.querySelector('#ui_home_post_changeType'));
//get hover object
var $my_homeButton = $("#ui_home_btn");

$my_homeButton.on({
    mouseenter: function () {
        ui_home_text.setText("HOME");
        ui_home_text.start();
    },
    mouseleave: function () {
        ui_home_text.setText("");
        ui_home_text.start();
    }
}); 