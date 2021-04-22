var contact_type = document.getElementById('contact_svg-container');
var contact_type_elements = contact_type.querySelectorAll("path");
const contact_type_color = getComputedStyle(document.documentElement).getPropertyValue("--color-highlight");
contact_type_elements.forEach(function(element, index){
  element.setAttribute("fill", contact_type_color);
})
