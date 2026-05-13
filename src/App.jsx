import React from 'react';
import './App.css';
import ProductManagement from './components/ProductManagement';
import InventoryStatus from './components/InventoryStatus';
import SalesAnalytics from './components/SalesAnalytics';
import OrderList from './components/OrderList';
import CustomerMessages from './components/CustomerMessages';
import PayoutSummary from './components/PayoutSummary';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <h1>Seller Dashboard</h1>
      </header>
      <main>
        <ProductManagement />
        <InventoryStatus />
        <SalesAnalytics />
        <OrderList />
        <CustomerMessages />
        <PayoutSummary />
      </main>
    </div>
  );
}

export default App;