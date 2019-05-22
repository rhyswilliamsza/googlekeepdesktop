const electron = require('electron');
const app = electron.app;
const BrowserWindow = electron.BrowserWindow;
const path = require('path');
const url = require('url');
const windowStateKeeper = require('electron-window-state');

var mainWindow;

/**
 * Create Window
 */
function createWindow() {
    // Load the previous state with fallback to defaults
    let mainWindowState = windowStateKeeper({
        defaultWidth: 1500,
        defaultHeight: 800
    });

    // Create the browser window.
    mainWindow = new BrowserWindow(
        {
            title: "Google Keep",
            titleBarStyle: 'hidden',
            'x': mainWindowState.x,
            'y': mainWindowState.y,
            'width': mainWindowState.width,
            'height': mainWindowState.height
        });

    mainWindowState.manage(mainWindow);

    // and load the app.html of the app.
    mainWindow.loadURL(url.format({
        pathname: path.join(__dirname, 'app.html'),
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