import React from 'react';

function ProductManagement() {
  return (
    <section>
      <h2>Product Management</h2>
      <table>
        <thead>
          <tr>
            <th>Product</th>
            <th>Price</th>
            <th>Status</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>Sample Product</td>
            <td>$10</td>
            <td>In Stock</td>
          </tr>
        </tbody>
      </table>
    </section>
  );
}

export default ProductManagement;