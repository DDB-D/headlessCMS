
const toggleSwitch = document.querySelector('.ui_darkMode_switch input[type="checkbox"]');
const currentTheme = localStorage.getItem('theme') ? localStorage.getItem('theme') : null;

var $ui_darkMode_switch = $(".ui_darkMode_switch");
var ui_darkMode_switch_txt = new ShuffleText(document.querySelector('#ui_darkMode_switch_txt'));
var ui_darkMode_switch_ico = document.getElementById("ui_darkMode_switch_icon");

//get all text elements in div ui_darkMode
var ui_darkMode_textSelect = document.getElementById('ui_darkMode').getElementsByClassName('ui_type');

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

    // ui_home quickFix: wrong text-color
    for (let i = 0; i < ui_home_textSelect.length; i++) {
        ui_home_textSelect[i].style.color = getComputedStyle(document.documentElement).getPropertyValue("--color-type");
    }

}

// on hover
$ui_darkMode_switch.on({
    mouseenter: function () {
      //set fontcolor for all ui_type elements
      for (let i = 0; i < ui_darkMode_textSelect.length; i++) {
          ui_darkMode_textSelect[i].style.color = getComputedStyle(document.documentElement).getPropertyValue("--color-bg");
      }
      if ($ui_darkMode_switch.hasClass('darkmodeActive')) {
        //set txt
        ui_darkMode_switch_txt.setText("switch to light");
        ui_darkMode_switch_txt.start();
        //set ui_menu_icon
        ui_darkMode_switch_ico.innerHTML = "&#x263C";

      } else {
        //set txt
        ui_darkMode_switch_txt.setText("switch to dark");
        ui_darkMode_switch_txt.start();
        //set ui_menu_icon
        ui_darkMode_switch_ico.innerHTML = "&#x2022";
      }

    },
    mouseleave: function () {

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
      //set fontcolor for all ui_type elements back
      for (let i = 0; i < ui_darkMode_textSelect.length; i++) {
        ui_darkMode_textSelect[i].style.color = getComputedStyle(document.documentElement).getPropertyValue("--color-type");
      }
    }
});

toggleSwitch.addEventListener('change', switchTheme, false);
