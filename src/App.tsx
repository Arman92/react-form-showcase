import React from 'react';
import './App.css';
import { SupplierNameDialog } from './components/SupplierName';

function App() {
  return (
    <div className="main-container">
      <h1 className="main-title">ERP Test Case</h1>
      <SupplierNameDialog />
    </div>
  );
}

export default App;
