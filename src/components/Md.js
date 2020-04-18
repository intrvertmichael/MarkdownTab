import React from 'react';
import '../style/Md.css';

const md = props =>{



  return (
    <div className='md'>
      <textarea className='md-input' defaultValue="Enter markdown text here to display..." onChange={(e)=>textChanged(props)}>
      </textarea>
    </div>)
}

const textChanged = (props) =>{
  const e = document.querySelector('.md-input').value;
  props.setText(e);
}

export default md;
