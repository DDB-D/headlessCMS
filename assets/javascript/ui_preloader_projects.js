/*
var preloader_logo = document.getElementById("myPreloader");
console.log(preloader_logo);
preloader_logo.setAttribute("fill" "red");
*/

const fillColor_css = getComputedStyle(document.documentElement).getPropertyValue("--color-type");

var doc = document.getElementById('preloader-fade');
var p = doc.querySelectorAll("path");

var counter;

//setup elements before animation start
p.forEach(function(element, index){
  element.setAttribute("fill", fillColor_css);
  //element.setAttribute("style","opacity:0.0; -moz-opacity:0.0; filter:alpha(opacity=0)");
})



  $(window).on('load', function(){
    /*
    p.forEach(function(element, index){
      //animation start: blend in elements separate
        setTimeout(function(){
          element.setAttribute("style","opacity:1.0; -moz-opacity:1.0; filter:alpha(opacity=100)");
        }, 5000);
    })*/
    $("#preloader-fade").fadeOut(500);
  });
