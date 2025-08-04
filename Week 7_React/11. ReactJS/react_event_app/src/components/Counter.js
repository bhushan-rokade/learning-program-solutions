import React, { useState } from 'react';

const Counter = () => {
  const [count, setCount] = useState(0);

  const sayHello = () => {
    console.log('Hello! The button was clicked.');
  };

  const handleIncrement = () => {
    setCount((prevCount) => prevCount + 1);
    sayHello();
  };

  const handleDecrement = () => {
    setCount((prevCount) => prevCount - 1);
  };

  return (
    <div className='counter-container'>
      <h2>Counter App</h2>
      <p className='count-display'>Current Count: {count}</p>
      <div className='button-group'>
        <button className='btn increment' onClick={handleIncrement}>
          Increment
        </button>
        <button className='btn decrement' onClick={handleDecrement}>
          Decrement
        </button>
      </div>
    </div>
  );
};

export default Counter;
