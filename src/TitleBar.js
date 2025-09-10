import React from 'react';
const { ipcRenderer } = window.require('electron');

export default function TitleBar() {
  return (
    <div className="title-bar" style={{ WebkitAppRegion: 'drag' }}>
      <span className="title">OxygenLows IDE</span>
      <div className="window-controls" style={{ WebkitAppRegion: 'no-drag' }}>
        <button onClick={() => ipcRenderer.send('window-minimize')}>_</button>
        <button onClick={() => ipcRenderer.send('window-maximize')}>▢</button>
        <button onClick={() => ipcRenderer.send('window-close')}>×</button>
      </div>
    </div>
  );
}
