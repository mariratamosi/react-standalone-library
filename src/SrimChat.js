import React from 'react';
import './App.css';
import {useState} from "react";
import Addition from "./Addition";

console.log('module executed!', useState);

function SrimChat({message}) {
    const [count, setCount] = useState(0)
    const onButtonClick = ()=>{
       console.log("clicked")
       setCount((count)=>{return count+1})
    }
  return (
    <div className="app-container">
        <Addition/>
        <div className="header"><div>Srim chat app - SrimChat.js</div></div>
        <div className="test-container">
            <h4>{message}</h4>
            <h4>{count}</h4>
            <button onClick={onButtonClick}>Click me</button>
        </div>
    </div>

  );
}

export default SrimChat;
