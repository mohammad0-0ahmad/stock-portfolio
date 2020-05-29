import React from 'react';
import './App.css';
import Button from './components/Button.js';


function App() {
  return (
    <div className="App">
    <div>
    <Button buttonText="Redigera" bgColor="#FDCC6B" handleClick={()=>console.log("no")}/>
    <Button buttonText="Spara" bgColor="#3C3C3B" handleClick={()=>console.log("yes")}/>
    </div>
    </div>
  );
}

export default App;
