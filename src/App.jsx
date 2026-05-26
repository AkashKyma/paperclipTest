import React from 'react';
import './App.css';
import WorkoutCards from './components/WorkoutCards';
import CalorieSummary from './components/CalorieSummary';
import ProgressCharts from './components/ProgressCharts';
import MealTracker from './components/MealTracker';
import SchedulePanel from './components/SchedulePanel';
import ProfileSection from './components/ProfileSection';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <h1>Fitness Tracking Dashboard</h1>
      </header>
      <main>
        <ProfileSection />
        <WorkoutCards />
        <CalorieSummary />
        <ProgressCharts />
        <MealTracker />
        <SchedulePanel />
      </main>
    </div>
  );
}

export default App;