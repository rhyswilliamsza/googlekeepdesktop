const electron = require('electron');
const app = electron.app;
const BrowserWindow = electron.BrowserWindow;
const path = require('path');
const url = require('url');

var mainWindow;

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

// This method will be called when Electron has finished
// initialization and is ready to create browser windows.
// Some APIs can only be used after this event occurs.
app.on('ready', createWindow);

app.title = "Google Keep";

app.commandLine.appendSwitch('ignore-gpu-blacklist');

// Quit when all windows are closed.
app.on('window-all-closed', function () {
    // On OS X it is common for applications and their menu bar
    // to stay active until the user quits explicitly with Cmd + Q
    if (process.platform !== 'darwin') {
        app.quit()
    }
});

app.on('activate', function () {
    // On OS X it's common to re-create a window in the app when the
    // dock icon is clicked and there are no other windows open.
    if (mainWindow === null) {
        createWindow()
    } else {
        mainWindow.show();
    }
});