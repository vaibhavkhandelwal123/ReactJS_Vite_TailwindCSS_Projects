import React from "react";
import He from "./home";
import { useState } from "react";
function Code({name}) {
    const [count, setCount] = useState(0);
    const increment = () => setCount(count + 1);
    // const decrement = () => setCount(count - 1)
    const decrement =()=>{
        setCount(count-1)
        console.log('hii')
    }
    return (
      <div style={{ backgroundColor: "lightblue",height:800}}>
        <div style={{ backgroundColor: "pink"}}>
          <He />
        </div>
        <h1 style={{ textAlign: "center", marginTop: 60, fontSize: 70 }}>
          {count}
        </h1>
        
        <button
          style={{
            color: "#0f8e13f7",
            fontSize: 19,
            position:"relative",
            borderRadius: 7,
            padding: 11,textAlign:"center",
            marginLeft:650,
            marginTop: 30,
            height: 60,
            
          }}
          onClick={increment}
        >
          increment
        </button>
        <button
          style={{
            color: "#ed5e06f7",
            position:"relative",
            fontSize: 19,
            borderRadius: 7,
            marginLeft:20,
            padding: 11,alignItems:"center",
            height: 60,
          }}
          onClick={decrement}
        >
          decrement
        </button>
        {count > 10 && count < 15 && (
          <h2 style={{ textAlign: "center", fontSize: 30, color: "green" }}>
            {name}
          </h2>
        )}
      </div>
    );
  }
  export default Code;