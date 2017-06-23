/**
 * Rhys Williams
 * www.rhyswilliams.co.za
 */

/**
 * Do actions on window load
 */
window.onload = function () {
    const webview = document.querySelector('webview');
    const loading = document.querySelector('#loading');
    const lightBulb = document.querySelector("#lightBulb");

    const loadstop = () => {

        //Shift Down Top Bar
        webview.insertCSS("#gb > div:nth-child(2) { padding-top: 20px })");

        //Loadout
        loading.style.animation = "loadFadeOut 0.7s forwards";
        setTimeout(function () {
            loading.style.display = "none";
        }, 1000);
    };

    webview.addEventListener('did-stop-loading', loadstop);
};