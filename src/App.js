import './App.css';
//import About from './components/About';


import NavBar from './components/NavBar';
import TextForm from './components/TextForm';
import React, { useState } from 'react';

 
function App() {
  const [mode, setMode] = useState('light');
  const toggleMode = ()=>{
    if(mode === 'light'){
      setMode('dark');
      document.body.style.backgroundColor = 'gray';
      document.title="Textutil -Darkmode";
    }
    else{
      setMode('light');
      document.body.style.backgroundColor = 'white';
      document.title="Textutil -Lightmode";
    }
  }
  
  return (
    <>
    {/* <Navbar title="TextUtils" aboutText="About TextUtils" /> */}
    {/* <Navbar/> */}
    <NavBar title="TextUtils" mode={mode} toggleMode={toggleMode}  />
    <div className="container my-3">
    <TextForm heading="Enter your Text Here" mode={mode}  />
   
   
   
    </div>
    </> 
  );
}

export default App;