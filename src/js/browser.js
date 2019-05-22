/**
 * Rhys Williams
 * www.rhyswilliams.co.za
 */

/**
 * Do actions on window load
 */

var $ = require('jquery');
var pjson = require('../package.json');

window.onload = function () {
    const webview = document.querySelector('webview');
    const loading = document.querySelector('#loading');
    const lightBulb = document.querySelector("#lightBulb");

    const loadstop = () => {
        //Shift Down Top Bar
        webview.insertCSS("#gb > div:nth-child(2) { padding-top: 20px })");
        
        webview.executeJavaScript('//Add Version\nvar original = document.getElementsByClassName("hSRGPd-haAclf")[0].innerHTML;\nif (!original.includes("Google Keep Desktop")) {\n    document.getElementsByClassName("hSRGPd-haAclf")[0].innerHTML = "<p style=\\"color: #999; font-size: 12px; padding: 0px 5px; text-decoration: none; white-space: nowrap;\\">Google Keep Desktop V' + pjson.version + '</p>" + original;\n}\n\n//Remove Apps Drawer\ndocument.querySelector("[aria-label=\'Google apps\']").style.display = "none";');

        //Loadout
        loading.style.animation = "loadFadeOut 0.4s forwards";
        setTimeout(function () {
            loading.style.display = "none";
        }, 500);
    };

    $.getJSON("https://api.github.com/repos/rhyswilliamsza/GoogleKeepDesktop/releases/latest", function(data) {
        var currentversion = pjson.version.replace(/\D/g,'');
        var latestversion = data.name.replace(/\D/g,'');
        
        if (latestversion > currentversion) {
            alert("There is a new version available!")
        }
    })

    webview.addEventListener('did-stop-loading', loadstop);
};