import React from 'react';
import { useState } from 'react';
import './styles.css';

export const Counter = () => {
    const [counter, setCounter] = useState(0);
    const incCounter = () => setCounter(prev => prev += 1);
    const decCounter = () => setCounter(prev => prev -= 1);
    return (<div>
        <h3>Counter</h3>
        <p>{counter}</p>
        <button onClick={incCounter}>+</button>
        <button onClick={decCounter}>-</button>
    </div>)
}