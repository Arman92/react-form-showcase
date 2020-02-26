import React from 'react';

import './App.css';
import { SupplierAdd } from './components/SupplierAdd';
import { Supplier } from './models/supplier';

function App() {
  const handleSupplierAddSubmit = (values: Supplier) => {
    alert('Received new supplier form values, checkout the console!');
    console.log('Here are the form values:', values);
  };

  return (
    <div className="main-container">
      <h1 className="main-title">ERP Test Case</h1>
      <SupplierAdd onFormSubmitted={handleSupplierAddSubmit} />
    </div>
  );
}

export default App;
