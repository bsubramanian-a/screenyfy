const electron = require("electron");
const desktopCapturer = electron.desktopCapturer;
const electronScreen = electron.screen;
const shell = electron.shell;

const fs = require('fs');
const os = require('os');
const url = require("url");
const path = require("path");

const {app, BrowserWindow} = electron;

let win;

app.on('ready', () => {
    const {width, height} = electron.screen.getPrimaryDisplay().workAreaSize
    win = new BrowserWindow({width, height})
    
});

