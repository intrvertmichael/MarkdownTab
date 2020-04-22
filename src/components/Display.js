import React from 'react';
import MarkdownIt from 'markdown-it';
import MarkdownItEmoji from 'markdown-it-emoji';
import MarkdownItTasks from 'markdown-it-task-lists';

import '../style/Display.css';
import '../style/DisplayPieces.css';

const display = (props) =>{
  const mdIt = new MarkdownIt({html: true, breaks:true, linkify:true, typographer:true});
  mdIt.use(MarkdownItEmoji);
  mdIt.use(MarkdownItTasks);
  const result = mdIt.render(props.text);

  return (
    <div className='display full-screen'>
      <div className='display-content' dangerouslySetInnerHTML={{__html: result}}/>
    </div>
)}

export default display;
