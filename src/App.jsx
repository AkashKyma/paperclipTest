import React from 'react';
import './App.css';
import ExamCards from './components/ExamCards';
import TimerWidget from './components/TimerWidget';
import ResultsSummary from './components/ResultsSummary';
import AnnouncementsPanel from './components/AnnouncementsPanel';
import SubjectFilters from './components/SubjectFilters';
import StudentProfile from './components/StudentProfile';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <h1>Online Exam Dashboard</h1>
      </header>
      <div className="App-body">
        <StudentProfile />
        <SubjectFilters />
        <div className="Dashboard">
          <ExamCards />
          <TimerWidget />
          <ResultsSummary />
          <AnnouncementsPanel />
        </div>
      </div>
    </div>
  );
}

export default App;