import React, { useState, useEffect, useRef } from "react";

export default function CounterFunction() {
  // useState will return [value, a function to update the value]
  const [count, setCount] = useState(0);
  const renderRef = useRef(0);
  const inputRef = useRef();
  const [isDark, setIsDark] = useState(false);
  const [address, setAddress] = useState({
    city: "TJ",
    state: "TN"
  })
  console.log(inputRef)

  // As of now, to store data in functional component, we used useState
  // so whenever, data which is stored in useState gets changed, our component re rendreed
  // My use case is , i need to see how many times render is happening
  // i cannot use, useState bcoz, it will trigger re render
  // if render triggered again and again, i cannot calculate how many re render happened
  // bcoz of the end less loop

  // I need to store data, some where, and in that place, if changes happens 
  // it should not re render my component


  // how to acheive componetDidMount, componentDidUpdate, componentWillUnMount
  // these lifecucles methos how to acheive using useEffect

  // use cases of useRef
  // 1. to store data which won;t trigger re render
  // 2. to access any dom element, use this useRef and assign it to respective element with ref attribute

  useEffect(()=>{
    /* const input = document.getElementById("funcInput");
    input.focus() */
    console.log("This useeffect runs everytime");
    // changes happening in ref, won;t trigger re rendering
    renderRef.current = renderRef.current + 1;
  })

  useEffect(()=>{
    inputRef.current.focus()
  }, [])
  
  const incrementCounter = (event) => {
    // 1 way of updating state, directly passing updated data into setCount function
    setCount(count + 1);
    setCount(count + 1);
    setCount(count + 1);

    // 2nd way, updating state, using a callback function inside setCount
    // inside setState methods , if u write a arrow function, then that arrow function will receive
    // previouse state value
    /* setCount((prevCount)=>{
        return prevCount + 1
    })
    setCount((prevCount)=>{
        return prevCount + 1
    })
    setCount((prevCount)=>{
        return prevCount + 1
    }) */

  };

  const decrementCounter = (event) => {
    setCount(count - 1);
  };

  const toggleTheme = () => {
    setIsDark(!isDark);
  };
  const changeCity = () => {
    setAddress({...address, city: "TVDM"})
  }
  return (
    <>
      <div
        style={{
          backgroundColor: isDark ? "black" : "white",
          color: isDark ? "white" : "black"
        }}
      >{`Count value in functional component is ${count}`}</div>
      <div>{`render count is ${renderRef.current}`}</div>
      <div>
        <button onClick={incrementCounter}>Increment</button>
        <button onClick={decrementCounter}>Decrement</button>
        <button onClick={toggleTheme}>Change Theme</button>
        <button onClick={changeCity}>Change City</button>
      </div>
      <div>{`City is ${address.city} and state is ${address.state}`}</div>
      <input type="text" id="funcInput" ref={inputRef}></input>
    </>
  );
}
