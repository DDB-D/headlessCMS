
/* text-shuffle ui_home_button */
var ui_menu_text = new ShuffleText(document.querySelector('#ui_menu_changeType'));
//ui_menu_text animation
var $my_menuButton = $(".layout_ui_menu");
/* first animation on page load */
ui_menu_text.start();

// if menu is active set ui
var ui_darkMode_switchColorOnClick = document.getElementById('ui_darkMode').getElementsByClassName('ui_type');

// on click execute overlay
$my_menuButton.on("click", function(){
  // menu overlay is active onClick to inactive
  if ($my_menuButton.hasClass('isActive')) {
    // on click set text to --color-type
    ui_menu_textSelect.style.color = getComputedStyle(document.documentElement).getPropertyValue("--color-bg");
    // on click set icon color to --color-type
    for (let i = 0; i < ui_menu_icon_spans.length; i++) {
        ui_menu_icon_spans[i].style.background = getComputedStyle(document.documentElement).getPropertyValue("--color-bg");
    }
    // on click set ui_home logo color back to default
    for (let i = 0; i < ui_home_textSelect.length; i++) {
        ui_home_textSelect[i].style.color = getComputedStyle(document.documentElement).getPropertyValue("--color-type");
    }
    // btn:darkmode-switch: switch color back to default on click menu-active
    for (let i = 0; i < ui_darkMode_switchColorOnClick.length; i++) {
      ui_darkMode_switchColorOnClick[i].style.color = getComputedStyle(document.documentElement).getPropertyValue("--color-type");
    }
    // run text animation
    ui_menu_text.setText("MENU");
    ui_menu_text.start();
    // run icon animation
    $(".ui_menu_icon").toggleClass('open_menuIcon');
    // close modal
    $('.overlay').removeClass('open');
    // set modal to isActive=false
    $(this).toggleClass('isActive');
  } else {
    // on hover set text to --color-bg
    ui_menu_textSelect.style.color = getComputedStyle(document.documentElement).getPropertyValue("--color-highlight");
    // on hover set icon color to --color-bg
    for (let i = 0; i < ui_menu_icon_spans.length; i++) {
        ui_menu_icon_spans[i].style.background = getComputedStyle(document.documentElement).getPropertyValue("--color-highlight");
    }
    // on click set ui_home logo color to menuIsActive color
    for (let i = 0; i < ui_home_textSelect.length; i++) {
        ui_home_textSelect[i].style.color = getComputedStyle(document.documentElement).getPropertyValue("--color-bg");
    }
    // btn:darkmode-switch: switch color on click menu-active
    for (let i = 0; i < ui_darkMode_switchColorOnClick.length; i++) {
      ui_darkMode_switchColorOnClick[i].style.color = getComputedStyle(document.documentElement).getPropertyValue("--color-bg");
    }

    // run text animation
    ui_menu_text.setText("CLOSE");
    ui_menu_text.start();
    // run icon animation
    $(".ui_menu_icon").toggleClass('open_menuIcon');
    // open modal
    $('.overlay').addClass('open');
    // set modal to isActive=false
    $(this).toggleClass('isActive');
  }
});

// on hover
var ui_menu_textSelect = document.getElementById('ui_menu_changeType');

// variables on hover set icon to --color-bg & back
var ui_menu_icon = document.getElementsByClassName('ui_menu_icon');
var ui_menu_icon_spans = ui_menu_icon[0].getElementsByTagName('span');


$my_menuButton.on({
    mouseenter: function () {
      if ($my_menuButton.hasClass('isActive')) {
        // on hover set text to --color-bg
        ui_menu_textSelect.style.color = getComputedStyle(document.documentElement).getPropertyValue("--color-highlight");
        // on hover set icon color to --color-bg
        for (let i = 0; i < ui_menu_icon_spans.length; i++) {
            ui_menu_icon_spans[i].style.background = getComputedStyle(document.documentElement).getPropertyValue("--color-highlight");
        }
        ui_menu_text.setText("CLOSE");
        ui_menu_text.start();
      } else {
        // on hover set text to --color-bg
        ui_menu_textSelect.style.color = getComputedStyle(document.documentElement).getPropertyValue("--color-bg");
        // on hover set icon color to --color-bg
        for (let i = 0; i < ui_menu_icon_spans.length; i++) {
            ui_menu_icon_spans[i].style.background = getComputedStyle(document.documentElement).getPropertyValue("--color-bg");
        }
        ui_menu_text.setText("OPEN");
        ui_menu_text.start();

        // on hover set text to --color-bg
        ui_menu_textSelect.style.color = getComputedStyle(document.documentElement).getPropertyValue("--color-bg");
        // on hover set icon color to --color-bg
        for (let i = 0; i < ui_menu_icon_spans.length; i++) {
            ui_menu_icon_spans[i].style.background = getComputedStyle(document.documentElement).getPropertyValue("--color-bg");
        }
      }

    },
    mouseleave: function () {
      if ($my_menuButton.hasClass('isActive')) {
        // on hover set text to --color-bg
        ui_menu_textSelect.style.color = getComputedStyle(document.documentElement).getPropertyValue("--color-bg");
        // on hover set icon color to --color-bg
        for (let i = 0; i < ui_menu_icon_spans.length; i++) {
            ui_menu_icon_spans[i].style.background = getComputedStyle(document.documentElement).getPropertyValue("--color-bg");
        }
        ui_menu_text.setText("CLOSE");
        ui_menu_text.start();
      } else {
        ui_menu_text.setText("MENU");
        ui_menu_text.start();

        // on hover out set text back to --color-type
        ui_menu_textSelect.style.color = getComputedStyle(document.documentElement).getPropertyValue("--type-bg");
        // on hover out set icon color to --color-type
        for (let i = 0; i < ui_menu_icon_spans.length; i++) {
            ui_menu_icon_spans[i].style.background = getComputedStyle(document.documentElement).getPropertyValue("--color-type");
        }
      }

    }
});
