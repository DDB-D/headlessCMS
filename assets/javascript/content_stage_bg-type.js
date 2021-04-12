var content_stage_bg_type = document.getElementById('content_stage_bg-type');
var content_stage_bg_type_elements = content_stage_bg_type.querySelectorAll("path");
const content_stage_bg_type_color = getComputedStyle(document.documentElement).getPropertyValue("--color-type");
content_stage_bg_type_elements.forEach(function(element, index){
  element.setAttribute("fill", content_stage_bg_type_color);
})
