import React from 'react';

function InventoryStatus() {
  return (
    <section>
      <h2>Inventory Status</h2>
      <div className="inventory-card">
        <p>In Stock: 100</p>
        <p>Out of Stock: 5</p>
      </div>
    </section>
  );
}

export default InventoryStatus;