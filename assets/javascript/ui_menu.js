
/* text-shuffle ui_home_button */
var ui_menu_text = new ShuffleText(document.querySelector('#ui_menu_changeType'));
//ui_menu_text animation
var $my_menuButton = $(".layout_ui_menu");
/* first animation on page load */
ui_menu_text.start();
// on click execute overlay
$my_menuButton.on("click", function(){
  // menu overlay is active
  if ($my_menuButton.hasClass('isActive')) {
    // run text animation
    //ui_menu_text.setText("MENU");
    //ui_menu_text.start();
    // run icon animation
    //$(".ui_menu_icon").toggleClass('open_menuIcon');
    // close modal
    $('.overlay').removeClass('open');
    // set modal to isActive=false
    $(this).toggleClass('isActive');
  } else {
    // run text animation
    //ui_menu_text.setText("CLOSE");
    //ui_menu_text.start();
    // run icon animation
    //$(".ui_menu_icon").toggleClass('open_menuIcon');
    // open modal
    $('.overlay').addClass('open');
    // set modal to isActive=false
    $(this).toggleClass('isActive');
  }
});
// on hover
/*
$my_menuButton.on({
    mouseenter: function () {
      if ($my_menuButton.hasClass('isActive')) {
        ui_menu_text.setText("CLOSE");
        ui_menu_text.start();
      } else {
        ui_menu_text.setText("OPEN");
        ui_menu_text.start();
      }
    },
    mouseleave: function () {
      if ($my_menuButton.hasClass('isActive')) {
        ui_menu_text.setText("CLOSE");
        ui_menu_text.start();
      } else {
        ui_menu_text.setText("MENU");
        ui_menu_text.start();
      }
    }
});
*/
