import './App.css';
import {useState} from "react";

function App() {
    const [count, setCount] = useState(0)
   const onButtonClick = ()=>{
       console.log("clicked")
       setCount((count)=>{return count+1})
    }
  return (
    <div className="App">
        <h1>{count}</h1>
      <button onClick={onButtonClick}>Click me</button>

    </div>
  );
}

export default App;
