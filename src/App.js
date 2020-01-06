import React from 'react';
import KeepingRegular from './components/KeepingRegular';
import GettingTheFacts from './components/GettingTheFacts';
import './App.css';

function App() {
  return (
    <div>
      <h1>Keeping Regular:</h1>
      <KeepingRegular />
      <h1>Getting The Facts:</h1>
      <GettingTheFacts />
    </div>
  );
};

export default App;
