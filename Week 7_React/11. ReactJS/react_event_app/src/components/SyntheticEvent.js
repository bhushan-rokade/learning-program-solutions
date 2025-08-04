import React from 'react';

const SyntheticEvent = () => {
  const handleClick = (event) => {
    console.log(event);
    alert('SyntheticEvent was clicked');
  };

  return (
    <div className='event-container'>
      <h2>Synthetic Event Example</h2>
      <button className='event-button' onClick={handleClick}>
        Press Me
      </button>
    </div>
  );
};

export default SyntheticEvent;
