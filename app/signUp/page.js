'use client'
import Header from '../header.js';
import "./signUp.css";
import { useState } from 'react'
import Intro from '../intro.js';

function App() {


 
 
  
  return (
    <div className="App" >
       <div id='header_holder' style={{opacity: 0.4}}><Header/></div>
       <div id='intro_holder' className='t' style={{opacity: 0.4}}><Intro/></div>
       <div id='signup_holder'></div>
       
    </div>

  );
  
}

export default App;