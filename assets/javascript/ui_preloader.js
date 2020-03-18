/*
var preloader_logo = document.getElementById("myPreloader");
console.log(preloader_logo);
preloader_logo.setAttribute("fill" "red");
*/

const fillColor_css = getComputedStyle(document.documentElement).getPropertyValue("--color-type");

var doc = document.getElementById('preloader-fade');
console.log(doc);
var p = doc.querySelectorAll("path");

p.forEach(function(element, index){
  element.setAttribute("fill", fillColor_css);
})

$(window).on('load', function(){
  $("#preloader-fade").fadeOut(1000);
});
