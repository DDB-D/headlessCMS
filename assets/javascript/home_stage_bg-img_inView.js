
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

var el1=$("#content_stage_bg-type");
var el2=$(".content_about");
var el1_inView = checkInView(el1);
var el2_inView = checkInView(el2);

var target=$("#content_stage_bg-img");

window.onload = function(){

  if (el1_inView){
    target.css({
      "display": "block", 
      "opacity": "0.85",
    });
  } else if (el2_inView){
      target.css({
        "display": "block", 
        "opacity": "0.45",
      });
    } else {
      target.css({
        "display": "none",
      })
    }
}

$(document).ready(function () {

  $("#content").scroll(function(){
    
    el1_inView = checkInView(el1);
    el2_inView = checkInView(el2);

    if (el1_inView){
      target.css({
        "display": "block", 
        "opacity": "0.85",
      });
    } else if (el2_inView){
        target.css({
          "display": "block", 
          "opacity": "0.45",
        });
      } else {
        target.css({
          "display": "none", 
        })
      }

  });
});
