console.log("change projects color!");
var content_projects_bg_type = document.getElementById('content_projects_bg-img');
var content_projects_bg_type_elements = content_projects_bg_type.querySelectorAll("path");
const content_projects_bg_type_color = getComputedStyle(document.documentElement).getPropertyValue("--color-type");
content_projects_bg_type_elements.forEach(function(element, index){
  element.setAttribute("fill", content_projects_bg_type_color);
})
