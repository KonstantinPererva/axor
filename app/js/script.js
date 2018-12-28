var buttonMenu = document.querySelector('.button-menu-left');
var menu = document.querySelector('.catalog-container__left');
var substrate = document.querySelector('.substrate');

buttonMenu.onclick = function () {
    menu.classList.add('catalog-container__left_active');
    substrate.classList.add('substrate_active');
    startup();
};

substrate.onclick = function () {
    menu.classList.remove('catalog-container__left_active');
    this.classList.remove('substrate_active');
};

function startup() {
    menu.addEventListener("touchstart", handleStart, false);
    menu.addEventListener("touchend", handleEnd, false);

    var ongoingTouches = [];
    var startPoint = null;
    var endPoint = null;

    function handleStart(evt) {
        var touches = evt.changedTouches;

        for (var i = 0; i < touches.length; i++) {
            ongoingTouches.push(touches[i]);
        }

        startPoint = ongoingTouches[ongoingTouches.length -1].pageX;
    }

    function handleEnd(evt) {
        var touches = evt.changedTouches;

        for (var i = 0; i < touches.length; i++) {
            ongoingTouches.push(touches[i]);
        }

        endPoint = ongoingTouches[ongoingTouches.length -1].pageX;

        closeMenu();
    }

    function closeMenu() {
        if (startPoint - endPoint >= 50) {
            menu.classList.remove('catalog-container__left_active');
            substrate.classList.remove('substrate_active');
        }
    }
}