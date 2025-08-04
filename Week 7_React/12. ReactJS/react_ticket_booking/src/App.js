import React, { useState } from 'react';
import UserPage from './UserPage';
import GuestPage from './GuestPage';
import './App.css';

const AuthButton = ({ isLoggedIn, onClick }) => (
  <button className='auth-button' onClick={onClick}>
    {isLoggedIn ? 'Logout' : 'Login'}
  </button>
);

function App() {
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  const toggleLogin = () => setIsLoggedIn(!isLoggedIn);

  return (
    <div className='App'>
      <header className='App-header'>
        {isLoggedIn ? <UserPage /> : <GuestPage />}
        <AuthButton isLoggedIn={isLoggedIn} onClick={toggleLogin} />
      </header>
    </div>
  );
}

export default App;
