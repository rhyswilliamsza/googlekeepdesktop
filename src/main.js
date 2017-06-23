const electron = require('electron');
const app = electron.app;
const BrowserWindow = electron.BrowserWindow;
const path = require('path');
const url = require('url');

var mainWindow;

/**
 * Create Window
 */
function createWindow() {
    // Create the browser window.
    mainWindow = new BrowserWindow(
        {
            title: "Google Keep",
            width: 1500,
            height: 800,
            titleBarStyle: 'hidden'
        });

    // and load the index.html of the app.
    mainWindow.loadURL(url.format({
        pathname: path.join(__dirname, 'index.html'),
        protocol: 'file:',
        slashes: true
    }));

    mainWindow.on('close', function (event) {
        if (mainWindow.isVisible()) {
            event.preventDefault();
            mainWindow.hide()
        } else {
            mainWindow = null;
        }

    })
}

/**
 * Do actions on ready
 */
app.on('ready', createWindow);

app.title = "Google Keep";

app.commandLine.appendSwitch('ignore-gpu-blacklist');

app.on('window-all-closed', function () {
    if (process.platform !== 'darwin') {
        app.quit()
    }
});

app.on('activate', function () {
    if (mainWindow === null) {
        createWindow()
    } else {
        mainWindow.show();
    }
});