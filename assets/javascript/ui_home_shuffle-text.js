// get animation object
var ui_home_text_onHome = new ShuffleText(document.querySelector('#ui_home_changeType_home'));
//get hover object
var $my_homeButton_onHome = $("#ui_home_btn");

$my_homeButton_onHome.on({
    mouseenter: function () {
        ui_home_text_onHome.setText("PRESS’N HOLD");
        ui_home_text_onHome.start();
    },
    mouseleave: function () {
        ui_home_text_onHome.setText("");
        ui_home_text_onHome.start();
    }
}); 