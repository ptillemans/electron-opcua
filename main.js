const { app, BrowserWindow } = require('electron')
const { startServer } = require('./simple-server')

const createWindow = () => {
  const win = new BrowserWindow({
    width: 800,
    height: 600
  })

  win.loadFile('index.html')
}

startServer().then(() => {
    console.log('Server started')
});

app.whenReady().then(() => {
  createWindow()
})
