import React from 'react';
import './App.css';
import StylistCards from './components/StylistCards';
import ServiceList from './components/ServiceList';
import AppointmentScheduler from './components/AppointmentScheduler';
import OfferBanners from './components/OfferBanners';
import ReviewsSection from './components/ReviewsSection';
import BookingSummary from './components/BookingSummary';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <h1>Beauty Salon Booking</h1>
      </header>
      <main>
        <OfferBanners />
        <StylistCards />
        <ServiceList />
        <AppointmentScheduler />
        <ReviewsSection />
        <BookingSummary />
      </main>
    </div>
  );
}

export default App;
