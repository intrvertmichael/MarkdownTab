import React from 'react';
import '../style/Customizer.css';

const customizer = () =>{
  return (
    <div className='customizer'>
      <div className='customizer-content'>
        <div> <h1>Custom Colors: </h1> </div>
        <div className='customizer-colors'>
          <div className='customizer-color'>custom <div className='color'></div></div>
          <div className='customizer-color'>custom <div className='color'></div></div>
          <div className='customizer-color'>custom <div className='color'></div></div>
          <div className='customizer-color'>custom <div className='color'></div></div>
          <div className='customizer-color'>custom <div className='color'></div></div>
          <div className='customizer-color'>custom <div className='color'></div></div>
        </div>
      </div>
    </div>
  )
}

export default customizer;
