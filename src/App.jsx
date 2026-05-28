import React from 'react';
import './App.css';
import GroupCard from './components/GroupCard';
import ExpenseList from './components/ExpenseList';
import SettlementSummary from './components/SettlementSummary';
import MemberBalances from './components/MemberBalances';
import RecentActivity from './components/RecentActivity';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <h1>Expense Sharing App</h1>
      </header>
      <main>
        <GroupCard />
        <ExpenseList />
        <SettlementSummary />
        <MemberBalances />
        <RecentActivity />
      </main>
    </div>
  );
}

export default App;
