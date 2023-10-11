var content_notes_bg_type = document.getElementById('content_notes_type');
var content_notes_bg_type_elements = content_notes_bg_type.querySelectorAll("path");
const content_notes_bg_type_color = getComputedStyle(document.documentElement).getPropertyValue("--color-type");
content_notes_bg_type_elements.forEach(function(element, index){
  element.setAttribute("fill", content_notes_bg_type_color);
})