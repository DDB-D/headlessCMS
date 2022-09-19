
console.clear();
const locoScroll = new LocomotiveScroll({
  el: document.querySelector('[data-scroll-container]'),
  smooth: true,
  //smoothMobile: false,
  tablet: { smooth: false },
  smartphone: { smooth: false }
});



//check object is in view
function checkVisible( elm, eval ) {
  eval = eval || "object visible";
  var viewportHeight = $(window).height(), // Viewport Height
      scrolltop = $(window).scrollTop(), // Scroll Top
      y = $(elm).offset().top,
      elementHeight = $(elm).height();   

  if (eval == "object visible") return ((y < (viewportHeight + scrolltop)) && (y > (scrolltop - elementHeight)));
  if (eval == "above") return ((y < (viewportHeight + scrolltop)));
}

locoScroll.on('call', func => {
  $("#content_stage_bg-img").css({
    "transition": "opacity 1s", 
    "opacity": "0",  
  });

  if (checkVisible($('#section_about'))) {
      //do something when myID1 is in view
      $("#content_stage_bg-img").css({
        "transition": "opacity 1s", 
        "opacity": "0",  
      });
  } else if (checkVisible($('#content_stage_bg-type'))) {
      $("#content_stage_bg-img").css({
        "transition": "opacity 1s", 
        "opacity": "1",
      });
  } else {
    $("#content_stage_bg-img").css({
      "transition": "opacity 1s", 
      "opacity": "0",  
    });
  }
});

/*
setTimeout(() => {  
  locoScroll.destroy();
}, 0);
setTimeout(() => {  
  locoScroll.init();
}, 50);
setTimeout(() => {  
  locoScroll.update();
}, 1000);
*/

/*
// tell ScrollTrigger to use these proxy methods for the ".smooth-scroll" element since Locomotive Scroll is hijacking things
ScrollTrigger.scrollerProxy(".smooth-scroll", {
  scrollTop(value) {
    return arguments.length ? locoScroll.scrollTo(value, 0, 0) : locoScroll.scroll.instance.scroll.y;
  }, // we don't have to define a scrollLeft because we're only scrolling vertically.
  getBoundingClientRect() {
    return {top: 0, left: 0, width: window.innerWidth, height: window.innerHeight};
  },
  // LocomotiveScroll handles things completely differently on mobile devices - it doesn't even transform the container at all! So to get the correct behavior and avoid jitters, we should pin things with position: fixed on mobile. We sense it by checking to see if there's a transform applied to the container (the LocomotiveScroll-controlled element).
  //pinType: document.querySelector(".smooth-scroll").style.transform ? "transform" : "fixed"
});

const sections = gsap.utils.toArray('section')

sections.forEach( function(section) {
  
  const inner = section.querySelector('.section-inner')
  
  ScrollTrigger.create({
    
    scroller: '.smooth-scroll',
    trigger: section,
    start: 'top top',
    end: '+=100%',
    pin: inner,
    pinSpacing: false,
    pinType: 'transform'
    
  })
  console.log("item: ");
  
})

// each time the window updates, we should refresh ScrollTrigger and then update LocomotiveScroll. 
ScrollTrigger.addEventListener("refresh", () => locoScroll.update());

// after everything is set up, refresh() ScrollTrigger and update LocomotiveScroll because padding may have been added for pinning, etc.
ScrollTrigger.refresh();


scroller.on('scroll', (args) => {
  // Get all current elements : args.currentElements
  if(typeof args.currentElements['hey'] === 'object') {
      let progress = args.currentElements['hey'].progress;
      console.log(progress);
      // ouput log example: 0.34
      // gsap example : myGsapAnimation.progress(progress);
  }
});*/