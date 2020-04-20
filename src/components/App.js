import React from 'react';
import Customizer from './Customizer';
import Display from './Display';
import Md from './Md';
import '../style/App.css';

class App extends React.Component {
  constructor() {
    super();
    this.state = {
      text: `
# Markdown Display Pannel
Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce porta convallis ex id viverra. Mauris pharetra ante ut lectus pellentesque, a facilisis libero ultricies. Donec imperdiet tellus et ipsum dignissim volutpat. Aliquam quis tortor rhoncus, fermentum urna non, efficitur nunc. Nulla sodales, justo ut tempor pretium, sem augue molestie sapien, blandit pellentesque ligula magna eget libero. Fusce non odio justo. Suspendisse potenti.

[Sample Link](http://www.google.com) with some text next to it
how about under it

## Markdown Display Pannel

Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce porta convallis ex id viverra. Mauris pharetra ante ut lectus pellentesque, a facilisis libero ultricies. Donec imperdiet tellus et ipsum dignissim volutpat. Aliquam quis tortor rhoncus, fermentum urna non, efficitur nunc. Nulla sodales, justo ut tempor pretium, sem augue molestie sapien, blandit pellentesque ligula magna eget libero. Fusce non odio justo. Suspendisse potenti.

### Markdown Display Pannel

Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce porta convallis ex id viverra. Mauris pharetra ante ut lectus pellentesque, a facilisis libero ultricies. Donec imperdiet tellus et ipsum dignissim volutpat. Aliquam quis tortor rhoncus, fermentum urna non, efficitur nunc. Nulla sodales, justo ut tempor pretium, sem augue molestie sapien, blandit pellentesque ligula magna eget libero. Fusce non odio justo. Suspendisse potenti.
      `
    };
  }

  onClick = (text) => {
     this.setState({
       text: text
     });
  }

  render(){


    return (
    <div className="container">
      <div className='tooSmall'>This window is under 700px which is too small. This extension doesn't work well with such a small screen. Please make the window bigger.</div>
      <button className='display-btn' onClick={growShrink}>X</button>

      <Customizer />
      <Md setText={this.onClick}/>
      <Display text={this.state.text} />
    </div>
  )}
}

const growShrink = () =>{
  const display = document.querySelector('.display');
  display.classList.toggle("full-screen");
  const md = document.querySelector('.md');
  md.classList.toggle("slide-left");
  const customizer = document.querySelector('.customizer');
  customizer.classList.toggle("slide-up");
}

export default App;
