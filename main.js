const {app, BrowserWindow } = require('electron');
const log = require('electron-log');

Object.assign(console, log.functions);

var circularReference = {otherData: 123};
circularReference.myself = circularReference;
console.info(circularReference);

let mainWindow;

function createWindow () {
  mainWindow = new BrowserWindow({
    width: 800,
    height: 600,
    webPreferences: {
      nodeIntegration: true
    }
  });

  mainWindow.loadFile('index.html');
}

app.on('ready', createWindow);