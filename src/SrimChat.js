import React, {useEffect} from 'react';
import './App.css';
import {useState} from "react";
import Addition from "./Addition";

const hideChat = ()=>{
    console.log("outside")
}

function SrimChat({message,  visible}) {
    console.log('Inside component!', useState);
    const [count, setCount] = useState(0)

    useEffect(()=>{
        console.log("useEffect 1")
    }, [])

    useEffect(()=>{
        console.log("useEffect 2")
    }, [visible])

    const onButtonClick = ()=>{
       console.log("clicked")
       setCount((count)=>{return count+1})
    }

    const anyFunction = ()=>{
        console.log()
    }

  return (
    <div className="app-container">
        <Addition/>
        <div className="header"><div>Srim chat app - SrimChat.js</div></div>
        <div className={`test-container ${visible===true?"":"hide"}`}>
            <h4>{message}</h4>
            <h4>{count}</h4>
            <button onClick={onButtonClick}>Click me</button>
        </div>
    </div>

  );
}

export default SrimChat;
