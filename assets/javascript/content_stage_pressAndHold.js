// The item (or items) to press and hold on
var item = document.querySelector("#content_stage_pressAndHold-btn");
var container = document.querySelector("#content_stage_pressAndHold");
var rotate_LogoType = document.querySelector("#rotate_pressAndHold");
var stage_fullscreenBg = document.querySelector("#content_stage_fullscreen-bg");

var maskSize = stage_fullscreenBg.style.getPropertyValue("-clipPath-radius-value");

var fullscreenBg_video = document.getElementById("fullscreen-bg_video");

var timePressed = 0;
var press = false;

// Listening for the mouse and touch events
item.addEventListener("mousedown", pressingDown, false);
item.addEventListener("mouseup", notPressingDown, false);
//item.addEventListener("mouseleave", notPressingDown, false);
item.addEventListener("touchstart", pressingDown, false);
item.addEventListener("touchend", notPressingDown, false);

function counter() {
  if (press) {
    timePressed++;
    scaleItem();

     rotateItem();
     scaleMaskUp();

    fullscreenBg_video.play();
  } else {
    timePressed = 0;
     resetItem();
     resetRotation();
     scaleMaskDown();
     fullscreenBg_video.pause();

  }
  requestAnimationFrame(counter);
}
counter();

function pressingDown(e) {
  press = true;
  e.preventDefault();
}
function notPressingDown(e) {
  press = false;
}

function scaleItem() {
  var size = 1 + timePressed / 5;
  if (size > 10) {
    size = 10;
    //container.classList.add("stripes");
  }
  //item.style.transitionDuration = ".5s";
  item.style.setProperty("--scale-value", size);

}

function rotateItem() {
  var rotate = 60 - timePressed;
  if (rotate < 1) {
    rotate = 1;
  }
  rotate_LogoType.style.setProperty("--rotate-value", rotate + "s");
}

function scaleMaskUp() {
  var size = 10 * timePressed;
  if (size > 500) {
    size = 500;
  }
  //console.log("sizeMask: " + size);
  stage_fullscreenBg.style.transitionDuration = ".5s";

  stage_fullscreenBg.style.setProperty("--clipPath-radius-value", size + "px");
  //stage_fullscreenBg.setProperty("--clipPath-radius-value", size + "px");
}

function scaleMaskDown() {

  //console.log("sizeMask: " + size);
  stage_fullscreenBg.style.transitionDuration = ".5s";

  stage_fullscreenBg.style.setProperty("--clipPath-radius-value", 0 + "px");
  //stage_fullscreenBg.setProperty("--clipPath-radius-value", size + "px");
}

function resetRotation(){
  rotate_LogoType.style.setProperty("--rotate-value", 60 + "s");
}


function resetItem() {
  item.style.transitionDuration = ".5s";
  item.style.setProperty("--scale-value", 1);

  container.classList.remove("stripes");
}
