
const toggleSwitch = document.querySelector('.ui_darkMode_switch input[type="checkbox"]');
const currentTheme = localStorage.getItem('theme') ? localStorage.getItem('theme') : null;

var $ui_darkMode_switch = $(".ui_darkMode_switch");
//var $ui_foot_setZIndx = $("#ui_foot");
var ui_foot_setZIndx =  document.getElementById('ui_foot');

var ui_darkMode_switch_txt = new ShuffleText(document.querySelector('#ui_darkMode_switch_txt'));
var ui_darkMode_switch_ico = document.getElementById("ui_darkMode_switch_icon");

//get all text elements in div ui_darkMode
var ui_darkMode_textSelect = document.getElementById('ui_darkMode').getElementsByClassName('ui_type');

//get text elements in ui_menu text
var ui_menu_text_switchCol = document.getElementById('ui_menu_changeType');

// get element content_stage_bg-type
var content_stage_bg_type_themeSwitch = document.getElementById('content_stage_bg-type');
var content_stage_bg_type_themeSwitch_elements = content_stage_bg_type_themeSwitch.querySelectorAll("path");

//get element content_projects bg-typefaces
var projects_bg_type_themeSwitch = document.getElementById('content_projects_type');
var projects_bg_type_themeSwitch_elements = projects_bg_type_themeSwitch.querySelectorAll("path");

// get element content_notes bg-type
var notes_bg_type_themeSwitch = document.getElementById('content_notes_type');
var notes_bg_type_themeSwitch_elements = notes_bg_type_themeSwitch.querySelectorAll("path");

// get element content_mygram bg-type
var mygram_bg_type_themeSwitch = document.getElementById('content_mygram_type');
var mygram_bg_type_themeSwitch_elements = mygram_bg_type_themeSwitch.querySelectorAll("path");

// theme already set in browser cookies?
if (currentTheme) {
    document.documentElement.setAttribute('data-theme', currentTheme);
    if (currentTheme === 'dark') {
        toggleSwitch.checked = true;
        ui_darkMode_switch_txt.setText("dark");
        ui_darkMode_switch_ico.innerHTML = "&#x2022";
        $ui_darkMode_switch.toggleClass('darkmodeActive');
    }
}

ui_darkMode_switch_txt.start();

// switch theme on clickBtn
function switchTheme(e) {

    if (e.target.checked) {
        document.documentElement.setAttribute('data-theme', 'dark');
        localStorage.setItem('theme', 'dark'); //add this
        $ui_darkMode_switch.toggleClass('darkmodeActive');
        //set text
        ui_darkMode_switch_txt.setText("dark");
        ui_darkMode_switch_txt.start();
        //set ui_menu_icon
        ui_darkMode_switch_ico.innerHTML = "&#x2022";
    }
    else {
        document.documentElement.setAttribute('data-theme', 'light');
        localStorage.setItem('theme', 'light'); //add this
        $ui_darkMode_switch.toggleClass('darkmodeActive');
        //set text
        ui_darkMode_switch_txt.setText("light");
        ui_darkMode_switch_txt.start();
        //set ui_menu_icon
        ui_darkMode_switch_ico.innerHTML = "&#x263C";
    }

    if ($ui_menu_checkActivity.hasClass('isActive')) {

      //set fontcolor for all ui_type elements in darkmode switch
      for (let i = 0; i < ui_darkMode_textSelect.length; i++) {
          ui_darkMode_textSelect[i].style.color = getComputedStyle(document.documentElement).getPropertyValue("--color-highlight");
      }
      //set menu-text to color-bg
      ui_menu_text_switchCol.style.color = getComputedStyle(document.documentElement).getPropertyValue("--color-bg");
      //set menu-icon to color-bg
      //set icon color to --color-bg
      for (let i = 0; i < ui_menu_icon_spans.length; i++) {
          ui_menu_icon_spans[i].style.background = getComputedStyle(document.documentElement).getPropertyValue("--color-bg");
      }
      //set home-logo color to color-bg
      for (let i = 0; i < ui_home_textSelect.length; i++) {
          ui_home_textSelect[i].style.color = getComputedStyle(document.documentElement).getPropertyValue("--color-bg");
      }

    } else {
      //set fontcolor for all ui_type elements in darkmode
      for (let i = 0; i < ui_darkMode_textSelect.length; i++) {
          ui_darkMode_textSelect[i].style.color = getComputedStyle(document.documentElement).getPropertyValue("--color-bg");
      }
      // set home-logo color to color-type
      for (let i = 0; i < ui_home_textSelect.length; i++) {
          ui_home_textSelect[i].style.color = getComputedStyle(document.documentElement).getPropertyValue("--color-type");
      }
    }
    // set content_bg-type to color-bg-graf
    var content_stage_bg_type_color_themeSwitch = getComputedStyle(document.documentElement).getPropertyValue("--color-type");
    content_stage_bg_type_themeSwitch_elements.forEach(function(element, index){
      element.setAttribute("fill", content_stage_bg_type_color_themeSwitch);
    })
    // set content_bg-type to color-bg-graf
    var projects_bg_type_color_themeSwitch = getComputedStyle(document.documentElement).getPropertyValue("--color-type");
    projects_bg_type_themeSwitch_elements.forEach(function(element, index){
      element.setAttribute("fill", projects_bg_type_color_themeSwitch);
    })
    // set content_teaser_notes bg-type to color-bg-graf
    var notes_bg_type_color_themeSwitch = getComputedStyle(document.documentElement).getPropertyValue("--color-type");
    notes_bg_type_themeSwitch_elements.forEach(function(element, index){
      element.setAttribute("fill", notes_bg_type_color_themeSwitch);
    })
    // set content_teaser_mygram bg-type to color-bg-graf
    var mygram_bg_type_color_themeSwitch = getComputedStyle(document.documentElement).getPropertyValue("--color-type");
    mygram_bg_type_themeSwitch_elements.forEach(function(element, index){
      element.setAttribute("fill", mygram_bg_type_color_themeSwitch);
    })

}

// on hover
$ui_darkMode_switch.on({
    mouseenter: function () {

      //ui_foot_setZIndx.style.zIndex = 3;

      if ($ui_menu_checkActivity.hasClass('isActive')) {
        //set fontcolor for all ui_type elements
        for (let i = 0; i < ui_darkMode_textSelect.length; i++) {
            ui_darkMode_textSelect[i].style.color = getComputedStyle(document.documentElement).getPropertyValue("--color-highlight");
        }

      } else {
        //set fontcolor for all ui_type elements
        for (let i = 0; i < ui_darkMode_textSelect.length; i++) {
            ui_darkMode_textSelect[i].style.color = getComputedStyle(document.documentElement).getPropertyValue("--color-bg");
        }
      }

      if ($ui_darkMode_switch.hasClass('darkmodeActive')) {
        //set txt
        ui_darkMode_switch_txt.setText("light");
        ui_darkMode_switch_txt.start();
        //set ui_menu_icon
        ui_darkMode_switch_ico.innerHTML = "&#x263C";

      } else {
        //set txt
        ui_darkMode_switch_txt.setText("dark");
        ui_darkMode_switch_txt.start();
        //set ui_menu_icon
        ui_darkMode_switch_ico.innerHTML = "&#x2022";
      }

    },
    mouseleave: function () {

      //ui_foot_setZIndx.style.zIndex = 1;

      if ($ui_menu_checkActivity.hasClass('isActive')) {
        //set fontcolor for all ui_type elements
        for (let i = 0; i < ui_darkMode_textSelect.length; i++) {
            ui_darkMode_textSelect[i].style.color = getComputedStyle(document.documentElement).getPropertyValue("--color-bg");
        }

      } else {
        //set fontcolor for all ui_type elements back
        for (let i = 0; i < ui_darkMode_textSelect.length; i++) {
          ui_darkMode_textSelect[i].style.color = getComputedStyle(document.documentElement).getPropertyValue("--color-type");
        }
      }
      if ($ui_darkMode_switch.hasClass('darkmodeActive')) {
        //set type
        ui_darkMode_switch_txt.setText("dark");
        ui_darkMode_switch_txt.start();
        //set ui_menu_icon
        ui_darkMode_switch_ico.innerHTML = "&#x2022";
      } else {
        //set type
        ui_darkMode_switch_txt.setText("light");
        ui_darkMode_switch_txt.start();
        //set ui_menu_icon
        ui_darkMode_switch_ico.innerHTML = "&#x263C";
      }
    }
});

toggleSwitch.addEventListener('change', switchTheme, false);
