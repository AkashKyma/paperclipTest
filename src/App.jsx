import React from 'react';
import './App.css';
import EventAgenda from './components/EventAgenda';
import SpeakerProfiles from './components/SpeakerProfiles';
import LiveChatPanel from './components/LiveChatPanel';
import NetworkingArea from './components/NetworkingArea';
import RegistrationSummary from './components/RegistrationSummary';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <h1>Virtual Event Platform</h1>
      </header>
      <EventAgenda />
      <SpeakerProfiles />
      <LiveChatPanel />
      <NetworkingArea />
      <RegistrationSummary />
    </div>
  );
}

export default App;