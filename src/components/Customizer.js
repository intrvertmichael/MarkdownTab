import React from 'react';
import '../style/Customizer.css';

const customizer = () =>{
  return (
    <div className='customizer'>
      <div className='customizer-content'>
        <div className='customizer-colors'>
          <div className='customizer-color-label'> Custom Colors: </div>
          <div className='customizer-color'>Background <div className='color background' onClick={()=>customColor('background')}></div> </div>
          <div className='customizer-color'>Text <div className='color text' onClick={()=>customColor('Text')}></div> </div>
          <div className='customizer-color'>Title <div className='color title' onClick={()=>customColor('Title')}></div> </div>
          <div className='customizer-color'>Quotes <div className='color quotes' onClick={()=>customColor('Quotes')}></div> </div>
          <div className='customizer-color'>Highlights <div className='color highlights' onClick={()=>customColor('Highlights')}></div> </div>
          <div className='customizer-color reset' onClick={()=>customColor('Reset')}> Reset </div>
        </div>
      </div>
    </div>
  )
}

const customColor = link => {
  console.log(`custom ${link} color clicked`);
}

export default customizer;
