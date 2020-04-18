import React from 'react';
import MarkdownIt from 'markdown-it';

import '../style/Display.css';

const display = (props) =>{
  const mdIt = new MarkdownIt({breaks:true, linkify:true});
  const result = mdIt.render(props.text);

  return (
    <div className='display full-screen'>
      <div className='display-content' dangerouslySetInnerHTML={{__html: result}}/>
    </div>
)}

export default display;
