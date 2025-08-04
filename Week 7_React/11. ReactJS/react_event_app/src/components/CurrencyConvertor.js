import React, { useState } from 'react';

const CurrencyConvertor = () => {
  const [rupees, setRupees] = useState(0);
  const [euros, setEuros] = useState(0);

  const handleRupeesChange = (event) => {
    setRupees(event.target.value);
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    const euroValue = rupees / 90;
    setEuros(euroValue.toFixed(2));
  };

  return (
    <div className='currency-container'>
      <h2>Currency Convertor</h2>
      <form onSubmit={handleSubmit}>
        <label>
          Indian Rupees:
          <input type='number' value={rupees} onChange={handleRupeesChange} />
        </label>
        <br />
        <button type='submit'>Convert</button>
      </form>
      <p>
        {rupees} INR is equal to {euros} EUR
      </p>
    </div>
  );
};

export default CurrencyConvertor;
