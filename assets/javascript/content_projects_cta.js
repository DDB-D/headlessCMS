
window.addEventListener('load', init);

function init() {
    var effectList = [];
    var elementList = document.querySelectorAll('.content_projects_cta_label');
    var buttonList = document.querySelectorAll('.content_projects_cta_type_container');

    for (var i = 0; i < elementList.length; i++) {

        var element = elementList[i];
        element.dataset.index = i;
        effectList[i] = new ShuffleText(element);
        
        var button = buttonList[i];
        button.dataset.index = i;

        button.addEventListener('mouseenter', function () {
            effectList[+this.dataset.index].setText("EXPLORE");
            effectList[+this.dataset.index].start();
        });
        button.addEventListener('mouseleave', function () {
            effectList[+this.dataset.index].setText("EXPLORE");
            effectList[+this.dataset.index].start();

        });
        effectList[i].start();
    }
}
