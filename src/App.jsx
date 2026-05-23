import React from 'react';
import './App.css';
import Header from './components/Header';
import Footer from './components/Footer';
import AgentList from './components/AgentList';

function App() {
  return (
    <div className="App">
      <Header />
      <main>
        <h1>Hello World</h1>
        <AgentList />
      </main>
      <Footer />
    </div>
  );
}

export default App;