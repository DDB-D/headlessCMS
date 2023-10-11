var content_mygram_bg_type = document.getElementById('content_mygram_type');
var content_mygram_bg_type_elements = content_mygram_bg_type.querySelectorAll("path");
const content_mygram_bg_type_color = getComputedStyle(document.documentElement).getPropertyValue("--color-type");
content_mygram_bg_type_elements.forEach(function(element, index){
  element.setAttribute("fill", content_mygram_bg_type_color);
})