locoScroll.on('call', func => {
    $("#content_stage_bg-img").css({
      "transition": "opacity 1s", 
      "opacity": "0",  
    });
  
    if (checkVisible($('#content_stage_bg-type'))) {
        //do something when myID1 is in view
        $("#content_stage_bg-img").css({
          "transition": "opacity 1s", 
          "opacity": "1",  
        });
        console.log("1");
    } else {
      $("#content_stage_bg-img").css({
        "transition": "opacity 1s", 
        "opacity": "0",  
      });
      console.log("0");
    }
    });