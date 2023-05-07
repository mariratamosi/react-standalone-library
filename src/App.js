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
    <div className="App">
        <h1>{message}</h1>
        <h1>{count}</h1>
      <button onClick={onButtonClick}>Click me</button>

    </div>
  );
}

export default App;
