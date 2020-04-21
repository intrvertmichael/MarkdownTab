import React from 'react';
import { ChromePicker } from 'react-color'
import '../style/Customizer.css';

const customizer = props =>{
  const circleClicked = link => {
    props.setProp('currentCircle', link);
    const divPosition = window.scrollY + document.querySelector(`.${link}`).getBoundingClientRect().left - 230;
    document.querySelector('.color-picker-container').style.left = `${divPosition}px`;
    document.querySelector('.color-picker-background').style.display = 'block';
  }

  const colorChange = (color) =>{
    console.log('color changed');
    console.log(color.hex);
    console.log(props.currentCircle);

    props.setProp('currentColor', color.hex);
    document.documentElement.style.setProperty(`--${props.currentCircle}-color`, color.hex);

    // chrome
    const browser = window.chrome || window.browser;
    if(props.currentCircle === 'background'){
      browser.storage.sync.set({ bgCustom:color.hex }, ()=>{})
    }
    else if(props.currentCircle === 'text'){
      browser.storage.sync.set({ textCustom:color.hex }, ()=>{})
    }
    else if(props.currentCircle === 'title'){
      browser.storage.sync.set({ titleCustom:color.hex }, ()=>{})
    }
    else if(props.currentCircle === 'highlights'){
      browser.storage.sync.set({ highCustom:color.hex }, ()=>{})
    }
  }

  const closeColorPicker = () =>{
    document.querySelector('.color-picker-background').style.display = 'none';
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
      <div className='color-picker-background' onClick={closeColorPicker}>
        <div className='color-picker-container'>
          <ChromePicker disableAlpha={true} color={props.currentColor} onChange={color=>colorChange(color)} />
        </div>
      </div>

      <div className='customizer-content'>
        <div className='customizer-colors'>
          <div className='customizer-color-label'><a href='https://www.markdownguide.org/basic-syntax/' target="_blank" rel="noopener noreferrer">Learn Markdown</a> </div>

          <div className='customizer-color'>
            Background
            <div className='color background' onClick={()=>circleClicked('background')}></div>
          </div>
          <div className='customizer-color'>
            Text
            <div className='color text' onClick={()=>circleClicked('text')}></div>
          </div>
          <div className='customizer-color'>
            Title
            <div className='color title' onClick={()=>circleClicked('title')}></div>
          </div>
          <div className='customizer-color'>
            Highlights
            <div className='color highlights' onClick={()=>circleClicked('highlights')}></div>
          </div>

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
