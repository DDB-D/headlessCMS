
/* text-shuffle ui_home_button */
var ui_menu_text = new ShuffleText(document.querySelector('#ui_menu_changeType'));
//ui_menu_text animation
var $my_menuButton = $(".layout_ui_menu");
/* first animation on page load */
ui_menu_text.start();
// on click
$my_menuButton.on("click", function(){
  // text animation
  if ($my_menuButton.hasClass('isActive')) {
    ui_menu_text.setText("MENU");
    ui_menu_text.start();
    $(this).toggleClass('isActive');
    console.log("clicked");
  } else {
    ui_menu_text.setText("CLOSE");
    ui_menu_text.start();
    $(this).toggleClass('isActive');
  }
  // burger icon transform
    //var menu = $('.menu-toggle');
    //menu.toggleClass('menu_is_active')

});
// on hover
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
