const app = {
  initialize() {
    this.bindEvents();
  },
  bindEvents() {
    document.addEventListener('deviceready', this.onDeviceReady, false);
    // 'load', 'offline', and 'online'.
  },
  onDeviceReady() {
    console.log('deviceready');
  },
};

app.initialize();
