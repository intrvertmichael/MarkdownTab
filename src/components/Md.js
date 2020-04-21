import React from 'react';
import '../style/Md.css';

const md = props =>{
  return (
    <div className='md'>
      <textarea className='md-input' value={props.text} onChange={(e)=>textChanged(props)}>
      </textarea>
    </div>)
}

const textChanged = (props) =>{
  const e = document.querySelector('.md-input').value;

  // chrome
  const browser = window.chrome || window.browser;
  browser.storage.sync.set({ key: e }, value =>{ console.log('Text is set') });
  browser.storage.sync.get(null, result => console.log(result));

  // react
  props.setText(e);
}

export default md;
