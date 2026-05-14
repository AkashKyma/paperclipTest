import React from 'react';
import CampaignCard from './components/CampaignCard';
import FeaturedStories from './components/FeaturedStories';
import SupporterTestimonials from './components/SupporterTestimonials';
import GoalStats from './components/GoalStats';
import './App.css';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <h1>Crowdfunding Platform</h1>
      </header>
      <main>
        <CampaignCard />
        <FeaturedStories />
        <SupporterTestimonials />
        <GoalStats />
      </main>
    </div>
  );
}

export default App;
