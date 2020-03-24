
let lastX = 0;
let lastY = 0;
let isStuck = false;
let showCursor = false;
let group, stuckX, stuckY, fillOuterCursor;

const initCanvas = () => {
const canvas = document.querySelector(".cursor--canvas");
const shapeBounds = {
  width: 75,
  height: 75
};

// switch curstom cursor color and set z-index if ui_menu is active
var curser_zIndex =  document.getElementsByClassName('cursor--canvas');
// set z-index for ui_type if ui_menu is active
var menuType_zIndex =  document.getElementsByClassName('layout_ui_menu');
// switch ui_type color if menu is isActive
var menuType_color_menuActive =  document.getElementById('ui_menu_changeType');

paper.setup(canvas);

//const strokeColor = "rgba(255, 0, 0, 0.5)";
const strokeColor_css = getComputedStyle(document.documentElement).getPropertyValue("--color-type");
const fillColor_css = getComputedStyle(document.documentElement).getPropertyValue("--color-highlight");

const strokeColor = strokeColor_css;
const strokeWidth = 0;
const segments = 8;
const radius = 15;

// we'll need these later for the noisy circle
const noiseScale = 150; // speed
const noiseRange = 25; // range of distortion
let isNoisy = true; // state

// the base shape for the noisy circle
const polygon = new paper.Path.RegularPolygon(
  new paper.Point(0, 0),
  segments,
  radius
);
polygon.strokeColor = strokeColor;
polygon.fillColor = fillColor_css;
polygon.strokeWidth = strokeWidth;
polygon.smooth();
group = new paper.Group([polygon]);
group.applyMatrix = false;

const noiseObjects = polygon.segments.map(() => new SimplexNoise());
let bigCoordinates = [];

// function for linear interpolation of values
const lerp = (a, b, n) => {
  return (1 - n) * a + n * b;
};

// function to map a value from one range to another range
const map = (value, in_min, in_max, out_min, out_max) => {
  return (
    ((value - in_min) * (out_max - out_min)) / (in_max - in_min) + out_min
  );
};



  // the draw loop of Paper.js
  // (60fps with requestAnimationFrame under the hood)
  // the draw loop of Paper.js
// (60fps with requestAnimationFrame under the hood)
paper.view.onFrame = event => {
  // set color dark/light mode
  const strokeColor_css_changed = getComputedStyle(document.documentElement).getPropertyValue("--color-highlight");
  const strokeColor_css_menuActive = getComputedStyle(document.documentElement).getPropertyValue("--color-bg");

  if ($ui_darkMode_switch.hasClass('darkmodeActive')) {
    polygon.fillColor = strokeColor_css_changed;
  } else {
    polygon.fillColor = strokeColor_css_changed;
  }
  //change stuff if menu is active
  if ($my_menuButton.hasClass('isActive')) {
    //set custom cursor z-index
    for (let i = 0; i < curser_zIndex.length; i++) {
      curser_zIndex[i].style.zIndex = 2;
    }
    //switch curstom cursor color if ui_menu is active
    polygon.fillColor = strokeColor_css_menuActive;
    //switch menu:ui_type to color--bg
    //menuType_color_menuActive.style.color = strokeColor_css_menuActive;
  } else { for (let i = 0; i < curser_zIndex.length; i++) {
    // set cursor back to default z-index
    curser_zIndex[i].style.zIndex = 1;
  }
}

  // using linear interpolation, the circle will move 0.2 (20%)
  // of the distance between its current position and the mouse
  // coordinates per Frame

  if (!isStuck) {
    // move circle around normally
    lastX = lerp(lastX, clientX, 0.6);
    lastY = lerp(lastY, clientY, 0.6);
    group.position = new paper.Point(lastX, lastY);
  } else if (isStuck) {
    // fixed position on a nav item
    lastX = lerp(lastX, stuckX, 0.6);
    lastY = lerp(lastY, stuckY, 0.6);
    group.position = new paper.Point(lastX, lastY);
  }

  if (isStuck && polygon.bounds.width < shapeBounds.width) {
    // scale up the shape
    polygon.scale(8.0);
  } else if (!isStuck && polygon.bounds.width > 30) {
    // remove noise
    if (isNoisy) {
      polygon.segments.forEach((segment, i) => {
        segment.point.set(bigCoordinates[i][0], bigCoordinates[i][1]);
      });
      isNoisy = false;
      bigCoordinates = [];
    }
    // scale down the shape
    const scaleDown = 0.72;
    polygon.scale(scaleDown);
  }

  // while stuck and big, apply simplex noise
  if (isStuck && polygon.bounds.width >= shapeBounds.width) {
    isNoisy = true;
    // first get coordinates of large circle
    if (bigCoordinates.length === 0) {
      polygon.segments.forEach((segment, i) => {
        bigCoordinates[i] = [segment.point.x, segment.point.y];
      });
    }

    // loop over all points of the polygon
    polygon.segments.forEach((segment, i) => {

      // get new noise value
      // we divide event.count by noiseScale to get a very smooth value
      const noiseX = noiseObjects[i].noise2D(event.count / noiseScale, 0);
      const noiseY = noiseObjects[i].noise2D(event.count / noiseScale, 1);

      // map the noise value to our defined range
      const distortionX = map(noiseX, -1, 1, -noiseRange, noiseRange);
      const distortionY = map(noiseY, -1, 1, -noiseRange, noiseRange);

      // apply distortion to coordinates
      const newX = bigCoordinates[i][0] + distortionX;
      const newY = bigCoordinates[i][1] + distortionY;

      // set new (noisy) coodrindate of point
      segment.point.set(newX, newY);
    });

  }
  polygon.smooth();
};

}

initCanvas();


const initHovers = () => {

  // find the center of the link element and set stuckX and stuckY
  // these are needed to set the position of the noisy circle
  const handleMouseEnter = e => {
    const navItem = e.currentTarget;
    const navItemBox = navItem.getBoundingClientRect();
    stuckX = Math.round(navItemBox.left + navItemBox.width / 2);
    stuckY = Math.round(navItemBox.top + navItemBox.height / 2);
    isStuck = true;
  };

  // reset isStuck on mouseLeave
  const handleMouseLeave = () => {
    isStuck = false;
  };

  // add event listeners to all items
  const linkItems = document.querySelectorAll(".custom-cursor_hoverable");
  linkItems.forEach(item => {
    item.addEventListener("mouseenter", handleMouseEnter);
    item.addEventListener("mouseleave", handleMouseLeave);
  });
};

initHovers();
