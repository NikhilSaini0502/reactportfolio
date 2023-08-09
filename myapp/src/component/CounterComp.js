import React from 'react';
import { useState } from 'react';

export default function CounterComp(props) {
    const [counter, setcounter] = useState(1);
    const Increment = () =>{
        setcounter( counter + 1);
    };
  return (
    <div>
        <h1>Counter : {counter}</h1>
        <button onClick={Increment}>Increment</button>
    </div>
  );
}
