'use client'
import Header from './header.js';
import './App.css';
import "./header.css"
import { useState } from 'react'
import Intro from './intro.js';
import ImgShow from './imgShow.js';
import Plans from './plans_in.js';
import "./plans_in.css";

function App() {


 
 
  
  return (
    <div className="App" >
       <div id='header_holder' ><Header/></div>
       <div id='intro_holder' className='t' ><Intro/></div>
      <div id='imgShow_holder'><ImgShow/></div> 
           <div id='plans_holder'><Plans/></div>
    </div>

  );
  
}

export default App;
