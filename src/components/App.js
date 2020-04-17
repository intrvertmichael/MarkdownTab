import React from 'react';
import Customizer from './Customizer';
import Display from './Display';
import Md from './Md';
import '../style/App.css';

function App() {
  return (
    <div className="container">
      <button className='display-btn' onClick={growShrink}>X</button>
      <Customizer />
      <Md />
      <Display />
    </div>
  );
}

const growShrink = () =>{
  const display = document.querySelector('.display');
  display.classList.toggle("full-screen");
  const md = document.querySelector('.md');
  md.classList.toggle("slide-left");
  const customizer = document.querySelector('.customizer');
  customizer.classList.toggle("slide-up");
}

export default App;
