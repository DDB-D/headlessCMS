
$(document).ready(function(){
    $(window).scroll(function(){
        $("#content_stage_bg-img").css("opacity", 1 - $(window).scrollTop() / $('#content_stage_bg-img').height());
    });
    if ($(window).scrollTop()>$('#content_stage_bg-img').height()){
      $("#content_stage_bg-img").css("opacity", 0);
    }
});

//works only absolute positioned
/*
var header = document.getElementById('content_stage_bg-img');

function fadeOutOnScroll(element) {
	if (!element) {
		return;
	}

	var distanceToTop = window.pageYOffset + element.getBoundingClientRect().top;
	var elementHeight = element.offsetHeight;
	var scrollTop = document.documentElement.scrollTop;

	var opacity = 1;

	if (scrollTop > distanceToTop) {
		opacity = 1 - (scrollTop - distanceToTop) / elementHeight;
	}

	if (opacity >= 0) {
		element.style.opacity = opacity;
	}
}

function scrollHandler() {
	fadeOutOnScroll(header);
}

window.addEventListener('scroll', scrollHandler);
*/

//var distanceToTop = window.pageYOffset + element.getBoundingClientRect().top;
//var elementHeight = element.offsetHeight;
//var scrollTop = document.documentElement.scrollTop;
/*
var element = document.getElementById('content_stage_bg-img');
var distanceToTop = window.pageYOffset + element.getBoundingClientRect().top;
var elementHeight = element.offsetHeight;
var scrollTop = document.documentElement.scrollTop;
var threshold = elementHeight;
var threshold = scrollTop+elementHeight;

$(window).scroll(function(){

  //var threshold = document.documentElement.scrollTop; // number of pixels before bottom of page that you want to start fading
  console.log(elementHeight);
  var op = (($(document).height() - $(window).height()) - $(window).scrollTop()) / threshold;
	if( op <= 0 ){
		$("#content_stage_bg-img").hide();
	} else {
		$("#content_stage_bg-img").show();
	}
	$("#content_stage_bg-img").css("opacity", op );
});
*/
