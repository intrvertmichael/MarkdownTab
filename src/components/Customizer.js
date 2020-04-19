import React from 'react';
import { CompactPicker } from 'react-color'
import '../style/Customizer.css';

const customizer = () =>{
  let currentClass = 'michael';

  const colorClicked = link => {
    currentClass = link;

    const divPosition = window.scrollY + document.querySelector(`.${currentClass}`).getBoundingClientRect().left - 260;
    document.querySelector('.color-picker-container').style.left = `${divPosition}px`;

    document.querySelector('.color-picker-container').style.display = 'block';
  }

  const colorPicked = (color) =>{
    document.documentElement.style.setProperty(`--${currentClass}-color`, color.hex);
  }

  const closeColorPicker = () =>{
    document.querySelector('.color-picker-container').style.display = 'none';
  }

  const resetColors = () =>{
    document.documentElement.style.setProperty(`--background-color`, '#00060f');
    document.documentElement.style.setProperty(`--text-color`, '#deeaff');
    document.documentElement.style.setProperty(`--title-color`, '#31759a');
    document.documentElement.style.setProperty(`--quotes-color`, '#555555');
    document.documentElement.style.setProperty(`--highlights-color`, '#555555');
  }

  const pickerColors = [
    '#4D4D4D', '#999999', '#FFFFFF', '#F44E3B', '#FE9200', '#FCDC00', '#DBDF00', '#A4DD00', '#68CCCA', '#73D8FF', '#AEA1FF', '#FDA1FF',
    '#333333', '#808080', '#cccccc', '#D33115', '#E27300', '#FCC400', '#B0BC00', '#68BC00', '#16A5A5', '#009CE0', '#7B64FF', '#FA28FF',
    // '#000000', '#666666', '#B3B3B3', '#9F0500', '#C45100', '#FB9E00', '#808900', '#194D33', '#0C797D', '#0062B1', '#653294', '#AB149E'
  ];

  return (
    <div className='customizer'>
      <div className='color-picker-container'><CompactPicker disableAlpha={true} onChange={color=>colorPicked(color)} onChangeComplete={closeColorPicker} colors={pickerColors}/> </div>

      <div className='customizer-content'>
        <div className='customizer-colors'>
          <div className='customizer-color-label'>Custom Colors: </div>
          <div className='customizer-color'>Background <div className='color background' onClick={()=>colorClicked('background')}></div> </div>
          <div className='customizer-color'>Text <div className='color text' onClick={()=>colorClicked('text')}></div> </div>
          <div className='customizer-color'>Title <div className='color title' onClick={()=>colorClicked('title')}></div> </div>
          <div className='customizer-color'>Quotes <div className='color quotes' onClick={()=>colorClicked('quotes')}></div> </div>
          <div className='customizer-color'>Highlights <div className='color highlights' onClick={()=>colorClicked('highlights')}></div> </div>
          <div className='customizer-color reset' onClick={resetColors}> Reset </div>
        </div>
      </div>
    </div>
  )
}

export default customizer;
