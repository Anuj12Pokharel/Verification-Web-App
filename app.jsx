import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
// frontend/src/App.jsx
import React from 'react';
import VerificationForm from './component/VerificationForm';

function App() {
  return (
    <div className="App">
      <h1>Enter Verification Code</h1>
      <VerificationForm />
    </div>
  );
}

export default App;
