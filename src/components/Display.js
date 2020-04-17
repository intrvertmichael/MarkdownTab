import React from 'react';

const display = () =>{
  return (
    <div className='display'>
      <div className='display-content'>
        <button className='display-btn' onClick={growShrink}> ... </button>
        <h1> Markdown Display Pannel </h1>
        <p> test </p>
      </div>
    </div>
)
}

const growShrink = () =>{
  const display = document.querySelector('.display');
  display.classList.toggle("full-screen");
  const md = document.querySelector('.md');
  md.classList.toggle("slide-left");
  const customizer = document.querySelector('.customizer');
  customizer.classList.toggle("slide-up");
}

export default display;
