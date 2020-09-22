
// transform text to circle – CircleType.js
function ui_home_transformType(){
  //console.log( "document is ready" );
  new CircleType(document.getElementById('ui_home_logoType'));
}

$( document ).ready(function() {
    ui_home_transformType();
});

// custom pressAndHold button
// The item (or items) to press and hold on
var item_uiHome = document.querySelector("#ui_home_btn");
//var container_uiHome = document.querySelector("#ui_home");
var rotate_LogoType_uiHome = document.querySelector("#rotate_logoType");
//var stage_fullscreenBg_uiHome = document.querySelector("#content_stage_fullscreen-bg_tablet");

//var maskSize = stage_fullscreenBg_uiHome.style.getPropertyValue("-clipPath-radius-value_tablet");

//var fullscreenBg_video_uiHome = document.getElementById("fullscreen-bg_video_tablet");

// counter
var timePressed_uiHome = 0;
var press_uiHome = false;

var screenWidth = $(window).width();




function rotateItem_uiHome() {
  var rotate = 60 - timePressed_uiHome*5;
  if (rotate < 1) {
    rotate = 1;
  }
  rotate_LogoType_uiHome.style.setProperty("--rotate-value_uiHome", rotate + "s");
}

function resetRotation_uiHome(){
  rotate_LogoType_uiHome.style.setProperty("--rotate-value_uiHome", 60 + "s");
}



// set text color on hover
// get element to hover
var ui_home = $("#ui_home");
//get all text elements in div ui_darkMode
var ui_home_textSelect = document.getElementById('ui_home').getElementsByClassName('ui_type');

var $ui_menu_checkActivity = $("#ui_menu_checkActivity");
// on hover
ui_home.on({
    mouseenter: function () {
      if ($ui_menu_checkActivity.hasClass('isActive')) {
        for (let i = 0; i < ui_home_textSelect.length; i++) {
            ui_home_textSelect[i].style.color = getComputedStyle(document.documentElement).getPropertyValue("--color-highlight");
        }
      } else {
        for (let i = 0; i < ui_home_textSelect.length; i++) {
            ui_home_textSelect[i].style.color = getComputedStyle(document.documentElement).getPropertyValue("--color-bg");
        }
      }
    },
    mouseleave: function () {
      if ($ui_menu_checkActivity.hasClass('isActive')) {
        for (let i = 0; i < ui_home_textSelect.length; i++) {
          ui_home_textSelect[i].style.color = getComputedStyle(document.documentElement).getPropertyValue("--color-bg");
        }
      }
      else {
        for (let i = 0; i < ui_home_textSelect.length; i++) {
          ui_home_textSelect[i].style.color = getComputedStyle(document.documentElement).getPropertyValue("--color-type");
        }
      }
    }
});
