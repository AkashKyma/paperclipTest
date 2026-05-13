import React from 'react';
import './App.css';
import Sidebar from './components/Sidebar';
import NoteEditor from './components/NoteEditor';
import TagsPanel from './components/TagsPanel';
import RecentNotes from './components/RecentNotes';
import SearchBar from './components/SearchBar';
import SettingsDrawer from './components/SettingsDrawer';

function App() {
  return (
    <div className="app">
      <Sidebar />
      <div className="main-content">
        <SearchBar />
        <NoteEditor />
        <TagsPanel />
        <RecentNotes />
      </div>
      <SettingsDrawer />
    </div>
  );
}

export default App;