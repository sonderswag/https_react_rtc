import React, { Component } from 'react';

import logo from './logo.svg';
import './App.css';
const AgoraRTC = require('agora-rtc-sdk');

AgoraRTC.Logger.error('this is error');
AgoraRTC.Logger.warning('this is warning');
AgoraRTC.Logger.info('this is info');
AgoraRTC.Logger.debug('this is debug');

var client, localStream, camera, microphone;


function getDevices() {
  AgoraRTC.getDevices(function (devices) {
    for (var i = 0; i !== devices.length; ++i) {
      // var device = devices[i];
      // var option = document.createElement('option');
      // option.value = device.deviceId;
      // if (device.kind === 'audioinput') {
      //   option.text = device.label || 'microphone ' + (audioSelect.length + 1);
      //   audioSelect.appendChild(option);
      // } else if (device.kind === 'videoinput') {
      //   option.text = device.label || 'camera ' + (videoSelect.length + 1);
      //   videoSelect.appendChild(option);
      // } else {
      //   console.log('Some other kind of source/device: ', device);
      // }
      console.log(devices[i]);
    }
  });
};

class App extends Component {

  render() {
    if(!AgoraRTC.checkSystemRequirements()) {
      alert("browser is no support webRTC");
    }
    getDevices();
    

    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">Welcome to React</h1>
        </header>
        <p className="App-intro">
          To get started, edit <code>src/App.js</code> and save to reload.
        </p>
      </div>
    );
  }
}

export default App;
