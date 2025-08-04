import React from 'react';
import './App.css';

function App() {
  const officeList = [
    { Name: 'DBS', Rent: 50000, Address: 'Chennai' },
    { Name: 'WeWork', Rent: 75000, Address: 'Mumbai' },
    { Name: 'Regus', Rent: 58000, Address: 'Bangalore' },
  ];

  return (
    <div className='App'>
      <h1>Office Spaces Within Your Budget</h1>

      <div className='banner'>
        <img
          src='https://ctfassets.imgix.net/vh7r69kgcki3/4OCCJgYjYNbWwhVWDBhXQd/6cdcaee9df5bf311bbfc964ba3924203/Web_150DPI-20221216_WeWork_Product_Shoot_Q4_4.jpg?auto=format%20compress&fit=crop&q=50&w=1000'
          alt='Office Space'
        />
      </div>

      <div className='office-list'>
        {officeList.map((office, index) => (
          <div className='office-card' key={index}>
            <h2>{office.Name}</h2>
            <p
              className={`rent ${
                office.Rent <= 60000 ? 'affordable' : 'expensive'
              }`}>
              Rent: ₹{office.Rent.toLocaleString()}
            </p>
            <p className='address'>{office.Address}</p>
          </div>
        ))}
      </div>
    </div>
  );
}

export default App;
