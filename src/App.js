import React from 'react';
import './App.css';
import TitleBar from './TitleBar';
const { shell } = window.require('electron');

export default function App() {
  const [theme, setTheme] = React.useState('light');
  React.useEffect(() => {
    document.body.setAttribute('data-theme', theme);
  }, [theme]);

  const openUrl = url => shell.openExternal(url);

  return (
    <div className="ide-container">
      <TitleBar />
      <header className="menu-bar">
        <div className="dropdown">
          <button className="menu-btn">Settings ▼</button>
          <div className="dropdown-content">
            <button onClick={() => setTheme(theme === 'light' ? 'dark' : 'light')}>Theme ({theme === 'light' ? 'Light' : 'Dark'})</button>
            <button disabled>Extensions</button>
            <button disabled>Auto Install</button>
            <button disabled>Check for updates</button>
          </div>
        </div>
        <div className="dropdown">
          <button className="menu-btn">Help ▼</button>
          <div className="dropdown-content">
            <button onClick={() => openUrl('https://oxygenlowssoftware.netlify.app/software/IDE')}>Documentation</button>
            <button onClick={() => openUrl('https://oxygenlowssoftware.netlify.app/software/IDE/Extensions')}>Extensions</button>
            <button onClick={() => openUrl('https://github.com/OxygenLow-s-Organization/OxygenLows-IDE')}>Github</button>
          </div>
        </div>
        <span className="menu-separator">|</span>
        <button className="menu-btn">Undo</button>
        <button className="menu-btn">Redo</button>
        <button className="menu-btn">Build</button>
        <button className="menu-btn">Build To</button>
        <button className="menu-btn">Run</button>
        <button className="menu-btn">Save</button>
        <button className="menu-btn">Save As</button>
      </header>
      <aside className="sidebar">
        <div className="sidebar-title">Projects</div>
        <ul>
          <li>Project 1</li>
          <li>Project 2</li>
        </ul>
      </aside>
      <main className="editor-area">
        <div className="tabs">
          <span className="tab active">main.py</span>
          <span className="tab">README.md</span>
        </div>
        <div className="editor-placeholder">
          <p>Editor Area (click tabs, sidebar, menu - not functional yet)</p>
        </div>
      </main>
      <footer className="status-bar">
        <span>Status: Ready</span>
      </footer>
    </div>
  );
}
