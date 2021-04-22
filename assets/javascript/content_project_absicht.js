var content_project_absicht_position = $("#content_project_absicht_getPosition").position();
var content_project_absicht_position_top = content_project_absicht_position.top;
//var content_project_absicht_position_top = content_project_absicht_position_top ;

$(window).scroll(function () {
  //console.log("hello absicht" + $(window).scrollTop());
  if ($(window).scrollTop() >= content_project_absicht_position_top) {
    console.log("project_absicht_pos: " + content_project_absicht_position_top);

    $("#content_project_absicht_bg-img").css('visibility', 'visible').hide().fadeIn('slow');
  } else {
    $("#content_project_absicht_bg-img").css('visibility', 'hidden');
  }

});
