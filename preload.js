const {ipcRenderer} = require('electron');

window.addEventListener('click', () => {
  ipcRenderer.send('call-remove-browser-view');
});
