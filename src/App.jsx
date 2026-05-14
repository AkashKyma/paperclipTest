import React from 'react';
import MovieBanner from './components/MovieBanner';
import ShowtimeCards from './components/ShowtimeCards';
import SeatSelection from './components/SeatSelection';
import BookingSummary from './components/BookingSummary';
import PaymentModal from './components/PaymentModal';
import './App.css';

function App() {
  return (
    <div className="App">
      <MovieBanner />
      <ShowtimeCards />
      <SeatSelection />
      <BookingSummary />
      <PaymentModal />
    </div>
  );
}

export default App;