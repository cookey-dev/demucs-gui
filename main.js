const path = require('path');
const { app, BrowserWindow } = require('electron');

function win() {
    const win = new BrowserWindow({
        width: 800,
        height: 600,
        autoHideMenuBar: true,
        preload: path.join(__dirname, 'preload.js')
    });
    win.loadFile('index.html');
}

(async () => {
    await app.whenReady();
    win();
    app.on('window-all-closed', () => {
        if (process.platform !== 'darwin') app.quit()
    });
    app.on('activate', () => {
        if (BrowserWindow.getAllWindows().length === 0) win();
    });
})();