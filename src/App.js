import React from 'react';
import './App.css';
import {useState} from "react";

function App({message}) {
    const [count, setCount] = useState(0)
    const onButtonClick = ()=>{
       console.log("clicked")
       setCount((count)=>{return count+1})
    }
  return (
    <div className="app-container">
        <div className="header"><div>S chat app</div></div>
        <div className="test-container">
            <h4>{message}</h4>
            <h4>{count}</h4>
            <button onClick={onButtonClick}>Click me</button>
        </div>
    </div>
  );
}

export default App;
