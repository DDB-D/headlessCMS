
// transform text to circle – CircleType.js
function ui_home_transformType(){
  console.log( "document is ready" );
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
var stage_fullscreenBg_uiHome = document.querySelector("#content_stage_fullscreen-bg_tablet");

var maskSize = stage_fullscreenBg_uiHome.style.getPropertyValue("-clipPath-radius-value_tablet");

var fullscreenBg_video_uiHome = document.getElementById("fullscreen-bg_video_tablet");

// counter
var timePressed_uiHome = 0;
var press_uiHome = false;

var screenWidth = $(window).width();

// Listening for the mouse and touch events
item_uiHome.addEventListener("mousedown", pressingDown_uiHome, false);
item_uiHome.addEventListener("mouseup", notPressingDown_uiHome, false);
item_uiHome.addEventListener("touchstart", pressingDown_uiHome, false);
item_uiHome.addEventListener("touchend", notPressingDown_uiHome, false);

function pressingDown_uiHome(e) {
  press_uiHome = true;
  e.preventDefault();
}
function notPressingDown_uiHome(e) {
  press_uiHome = false;
}

//counter
function counter_uiHome() {
  if (press_uiHome) {

      timePressed_uiHome++;
      scaleItem_uiHome();
      rotateItem_uiHome();

      scaleMaskUp_uiHome();
      fullscreenBg_video_uiHome.play();

  } else {

      timePressed_uiHome = 0;
      resetItem_uiHome();
      resetRotation_uiHome();
      scaleMaskDown_uiHome();
      fullscreenBg_video_uiHome.pause();
  }
  requestAnimationFrame(counter_uiHome);
}
counter_uiHome();

function scaleItem_uiHome() {
  var size = 1 + timePressed_uiHome / 2;
  if (size > 20) {
    size = 20;
  }
  item_uiHome.style.setProperty("--scale-value_home-btn", size);
}

function resetItem_uiHome() {

  item_uiHome.style.transitionDuration = ".5s";
  item_uiHome.style.setProperty("--scale-value_home-btn", 1);

}


function rotateItem_uiHome() {
  var rotate = 60 - timePressed_uiHome;
  if (rotate < 1) {
    rotate = 1;
  }
  rotate_LogoType_uiHome.style.setProperty("--rotate-value_uiHome", rotate + "s");
}

function resetRotation_uiHome(){
  rotate_LogoType_uiHome.style.setProperty("--rotate-value_uiHome", 60 + "s");
}

function scaleMaskUp_uiHome() {
  var size = 25 * timePressed_uiHome;
  if (size > screenWidth) {
    size = screenWidth;
  }
  stage_fullscreenBg_uiHome.style.transitionDuration = ".5s";
  stage_fullscreenBg_uiHome.style.setProperty("--clipPath-radius-value_tablet", size + "px");
  console.log("scaleMask");


}

function scaleMaskDown_uiHome() {
  stage_fullscreenBg_uiHome.style.transitionDuration = ".5s";
  stage_fullscreenBg_uiHome.style.setProperty("--clipPath-radius-value_tablet", 0 + "px");
}
