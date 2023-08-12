
function  checkInView(elem,partial)
{
    var container = $("#content");
    var contHeight = container.height();
    var contTop = container.scrollTop();
    var contBottom = contTop + contHeight ;
 
    var elemTop = $(elem).offset().top - container.offset().top;
    var elemBottom = elemTop + $(elem).height();
    
    var isTotal = (elemTop >= 0 && elemBottom <=contHeight);
    var isPart = ((elemTop < 0 && elemBottom > 0 ) || (elemTop > 0 && elemTop <= container.height())) && partial ;
    
    return  isTotal  || isPart ;
}

var el1=$("#content_projects_type");
var el2=$(".content_blog-overview");
var el1_inView = checkInView(el1);
var el2_inView = checkInView(el2);

var target=$("#content_projects_index_bg-img");

window.onload = function(){

  if (el1_inView == true ){
    target.css({
      "display": "block",
      "opacity": "1.0", 
    });
  } 

  if (el2_inView == true){
    target.css({
      "display": "block", 
      "opacity": "0.5",
    });
  } 

  if (el1_inView == false && el2_inView == false ){
    target.css({
      "display": "none", 
    });
  } 
  
  else {    
    target.css({
      "display": "block", 
    });
    
  }
}

$(document).ready(function () {

  $("#content").scroll(function(){
    
    el1_inView = checkInView(el1);
    el2_inView = checkInView(el2);

    if (el1_inView == true ){
      target.css({
        "display": "block",
        "opacity": "1.0", 
      });
    } 

    if (el2_inView == true){
      target.css({
        "display": "block", 
        "opacity": "0.5",
      });
    } 

    if (el1_inView == false && el2_inView == false ){
      target.css({
        "display": "none", 
      });
    } 
    
    else {    
      target.css({
        "display": "block", 
      });
      
    }
  });
});
