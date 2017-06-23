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

        webview.executeJavaScript('//Add Version\nvar original = document.getElementsByClassName("hSRGPd-haAclf")[0].innerHTML;\nif (!original.includes("Google Keep Desktop")) {\n    document.getElementsByClassName("hSRGPd-haAclf")[0].innerHTML = "<p style=\\"color: #999; font-size: 12px; padding: 0px 5px; text-decoration: none; white-space: nowrap;\\">Google Keep Desktop V0.0.1</p>" + original;\n}\n\n//Remove Apps Drawer\ndocument.querySelector("[aria-label=\'Google apps\']").style.display = "none";');

        //Loadout
        loading.style.animation = "loadFadeOut 0.7s forwards";
        setTimeout(function () {
            loading.style.display = "none";
        }, 1000);
    };

    webview.addEventListener('did-stop-loading', loadstop);
};