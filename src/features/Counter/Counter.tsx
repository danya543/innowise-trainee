import React from 'react';
import { useState } from 'react';
import './styles.css';

export const Counter = () => {
    const [counter, setCounter] = useState(0);
    const incCounter = () => setCounter(prev => prev += 1);
    const decCounter = () => setCounter(prev => prev -= 1);
    const multCounter = () => setCounter(prev => prev *= 2);
    return (<div>
        <h3>Counter</h3>
        <p>{counter}</p>
        <button onClick={incCounter} name='+'>+</button>
        <button onClick={decCounter} name='-'>-</button>
        <button onClick={multCounter} name='*2'>*2</button>
    </div>)
}