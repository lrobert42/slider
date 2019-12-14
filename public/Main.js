const {app, BrowserWindow} = require('electron')

function createWindow(){
    win = new BrowserWindow({widht:800, height:480})

    win.loadURL('http://localhost:3000')
}

app.on('ready', createWindow)
