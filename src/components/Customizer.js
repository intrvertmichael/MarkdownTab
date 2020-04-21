import React from 'react';
import { CompactPicker } from 'react-color'
import '../style/Customizer.css';

const customizer = () =>{
  let currentClass = '';

  const circleClicked = link => {
    currentClass = link;

    const divPosition = window.scrollY + document.querySelector(`.${currentClass}`).getBoundingClientRect().left - 260;
    document.querySelector('.color-picker-container').style.left = `${divPosition}px`;

    document.querySelector('.color-picker-container').style.display = 'block';
  }

  const colorPicked = (color) =>{
    document.documentElement.style.setProperty(`--${currentClass}-color`, color.hex);

    // chrome
    const browser = window.chrome || window.browser;
    if(currentClass === 'background'){
      browser.storage.sync.set({ bgCustom:color.hex }, ()=>{})
    }
    else if(currentClass === 'text'){
      browser.storage.sync.set({ textCustom:color.hex }, ()=>{})
    }
    else if(currentClass === 'title'){
      browser.storage.sync.set({ titleCustom:color.hex }, ()=>{})
    }
    else if(currentClass === 'highlights'){
      browser.storage.sync.set({ highCustom:color.hex }, ()=>{})
    }
  }

  const closeColorPicker = () =>{
    document.querySelector('.color-picker-container').style.display = 'none';
  }

  const resetColors = () =>{
    document.documentElement.style.setProperty(`--text-size`, `15px`);
    document.documentElement.style.setProperty(`--height-size`, `30px`);
    document.documentElement.style.setProperty(`--background-color`, '#000a15');
    document.documentElement.style.setProperty(`--text-color`, '#ffffff');
    document.documentElement.style.setProperty(`--title-color`, '#a0bd9a');
    document.documentElement.style.setProperty(`--highlights-color`, '#ddff00');

    // save on chrome
    const browser = window.chrome || window.browser;
    browser.storage.sync.set({
      textSize: '15px',
      heightSize:'30px',
      bgCustom:'#000a15',
      textCustom:'#ffffff',
      titleCustom:'#a0bd9a',
      highCustom:'#ddff00'
    }, value =>{ console.log('Values are set') });

    browser.storage.sync.get(null, result => console.log(result));
  }

  const pickerColors = [
    '#040404', '#ffffff', '#ddff00', '#e8ccc6', '#bdac9a', '#d6cd97', '#dbe8d3', '#a0bd9a', '#d1e0f1', '#9aabbd', '#a99abd', '#bd9a9f',
    '#000000', '#f7f7f7', '#ff1500', '#140100', '#150b00', '#3f3a19', '#9ea599', '#041500', '#a0aab1', '#000a15', '#090015', '#150003'
  ];

  const changeFontSize = operation =>{
    let sizeString = getComputedStyle(document.documentElement).getPropertyValue('--text-size');
    let size = sizeString.replace('px','');

    if(operation === 'bigger'){
      if(size<25){
        size++;
        document.documentElement.style.setProperty(`--text-size`, `${size}px`);
        document.documentElement.style.setProperty(`--height-size`, `${size*2}px`);
      }
    } else if(operation === 'smaller'){
      if(size>10){
        size--;
        document.documentElement.style.setProperty(`--text-size`, `${size}px`);
        document.documentElement.style.setProperty(`--height-size`, `${size*2}px`);
      }
    }

    // chrome
    const browser = window.chrome || window.browser;
    browser.storage.sync.set({ textSize:`${size}px` }, ()=>{})
    browser.storage.sync.set({ heightSize:`${size*2}px` }, ()=>{})
  }

  return (
    <div className='customizer'>
      <div className='color-picker-container'><CompactPicker disableAlpha={true} onChange={color=>colorPicked(color)} onChangeComplete={closeColorPicker} colors={pickerColors}/> </div>

      <div className='customizer-content'>
        <div className='customizer-colors'>
          <div className='customizer-color-label'><a href='https://www.markdownguide.org/basic-syntax/' target="_blank" rel="noopener noreferrer">Learn Markdown</a> </div>

          <div className='customizer-color'>Background <div className='color background' onClick={()=>circleClicked('background')}></div> </div>
          <div className='customizer-color'>Text <div className='color text' onClick={()=>circleClicked('text')}></div> </div>
          <div className='customizer-color'>Title <div className='color title' onClick={()=>circleClicked('title')}></div> </div>
          <div className='customizer-color'>Highlights <div className='color highlights' onClick={()=>circleClicked('highlights')}></div> </div>

          <div className='customizer-color'>
            <button className='smallerText' onClick={()=>changeFontSize('smaller')}>A</button>
            <button className='biggerText' onClick={()=>changeFontSize('bigger')}>A</button>
          </div>

          <div className='customizer-color reset' onClick={resetColors}> Reset </div>
        </div>
      </div>
    </div>
  )
}

export default customizer;
