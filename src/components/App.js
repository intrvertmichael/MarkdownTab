import React from 'react';
import Customizer from './Customizer';
import Display from './Display';
import Md from './Md';
import '../style/App.css';

function App() {
  return (
    <div className="container">
      <Customizer />
      <Md />
      <Display />
    </div>
  );
}

export default App;
