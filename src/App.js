import React from 'react';
import './App.css';

export default function App() {
  return (
    <div className="ide-container">
      <header className="menu-bar">
        <span>File</span>
        <span>Edit</span>
        <span>View</span>
        <span>Extensions</span>
        <span>AI</span>
        <span>Cloud</span>
        <span>Debug</span>
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
